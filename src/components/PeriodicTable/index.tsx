import useSWRImmutable from 'swr/immutable';

import ElementCard from '@/components/PeriodicTable/ElementCard';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constant';
import type { ElementDetailsTypes } from '@/types/elements';

interface ElementsResponse {
  elements: ElementDetailsTypes[];
}

const fetcher = async (req: string): Promise<ElementsResponse> => {
  await sleep(3000);
  const res = await fetch(req);
  return res.json() as Promise<ElementsResponse>;
};

const sleep = (msec: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, msec);
  });

export default function PeriodicTable() {
  const { data, error } = useSWRImmutable<ElementsResponse>(
    '/api/elements',
    fetcher,
  );
  // エラー
  if (error) return <div>failed to load</div>;

  const elements = data?.elements;

  const nonLanthanideActinideElements = elements?.filter(
    (el) =>
      !lanthanidesAtomicNumbers.some((an) => an === el.number)
      && !actinidesAtomicNumbers.some((an) => an === el.number),
  );

  const lanthadineAndActinideElements = elements?.filter(
    (el) =>
      lanthanidesAtomicNumbers.some((an) => an === el.number)
      || actinidesAtomicNumbers.some((an) => an === el.number),
  );

  const reOrderedElements = [
    ...(nonLanthanideActinideElements ?? []),
    ...(lanthadineAndActinideElements ?? []),
  ];

  return (
    <div className="grid-rows-[repeat(8, minmax(0, 1fr)), auto, 1fr] grid min-w-[1400px] grid-cols-18 gap-1 overflow-x-auto">
      {reOrderedElements.map((element, i) => (
        <ElementCard
          key={`${element.name}`}
          element={element}
          nextElement={elements?.[i + 1]}
        />
      ))}
    </div>
  );
}
