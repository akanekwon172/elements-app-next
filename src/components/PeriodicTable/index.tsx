import { useMemo } from 'react';

import useSWRImmutable from 'swr/immutable';

import ElementCard from '@/components/PeriodicTable/ElementCard';
import TableGaps from '@/components/PeriodicTable/TableGaps';
import TableHeaders from '@/components/PeriodicTable/TableHeaders';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constant';
import type { ElementDetailsTypes } from '@/types/elements';

interface ElementsResponse {
  elements: ElementDetailsTypes[];
}

const fetcher = async (req: string): Promise<ElementsResponse> => {
  const res = await fetch(req);
  return res.json() as Promise<ElementsResponse>;
};

export default function PeriodicTable() {
  const { data, error } = useSWRImmutable<ElementsResponse>(
    '/api/elements',
    fetcher,
  );

  const elements = data?.elements;

  // Element period refers to its row in the periodic table.
  // Element group refers to its column in the periodic table.

  const nonLanthanideActinideElements = useMemo(
    () =>
      elements?.filter(
        (el) =>
          !lanthanidesAtomicNumbers.some((an) => an === el.number)
          && !actinidesAtomicNumbers.some((an) => an === el.number),
      ),
    [elements],
  );

  const lanthanideAndActinideElements = useMemo(
    () =>
      elements?.filter(
        (el) =>
          lanthanidesAtomicNumbers.some((an) => an === el.number)
          || actinidesAtomicNumbers.some((an) => an === el.number),
      ),
    [elements],
  );

  if (error) return <div>failed to load</div>;

  const reOrderedElements = [
    ...(nonLanthanideActinideElements ?? []),
    ...(lanthanideAndActinideElements ?? []),
  ];

  return (
    <div className="grid grid-cols-[32px_repeat(18,_minmax(0,_1fr))] grid-rows-[auto_repeat(7,_minmax(0,_1fr))_auto_1fr_1fr] gap-1">
      <TableHeaders />
      <TableGaps />

      {reOrderedElements.map((element) => (
        <ElementCard key={`${element.name}`} element={element} />
      ))}
    </div>
  );
}
