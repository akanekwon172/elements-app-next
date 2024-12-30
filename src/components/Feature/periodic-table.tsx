import useSWRImmutable from 'swr/immutable';

import ElementCard from '@/components/Elements/ElementCard';
import type { ElementDetailsTypes } from '@/types/elements';

const fetcher = (req: string) => fetch(req).then((res) => res.json());

interface ElementsResponse {
  elements: ElementDetailsTypes[];
}

export default function PeriodicTable() {
  const { data, error, isLoading } = useSWRImmutable<ElementsResponse>(
    '/api/elements',
    fetcher,
  );
  // エラー
  if (error) return <div>failed to load</div>;
  // 読み込み中
  if (isLoading) return <div>loading...</div>;
  const elements = data?.elements;

  return (
    <>
      <div className="grid grid-cols-18 grid-rows-5 justify-center gap-1">
        <div className="col-2/span_16 row-start-1 row-end-1" />
        <div className="col-3/span_10 row-1/4" />
        {elements?.map(
          (element) =>
            (element.number < 57 || element.number >= 72)
            && (element.number < 89 || element.number >= 104) && (
              <ElementCard
                key={element.number}
                symbol={element.symbol}
                name={element.name}
                number={element.number}
                atomic_mass={Math.round(element.atomic_mass * 1e3) / 1e3}
                // color={element.block as 's' | 'p' | 'd' | 'f'}
              />
            ),
        )}
      </div>
      <div className="grid grid-cols-18 grid-rows-2 justify-center gap-1">
        {elements?.map(
          (element) =>
            (element.number <= 57 && element.number > 71)
            && (element.number <= 89 && element.number > 103) && (
              <ElementCard
                key={element.number}
                symbol={element.symbol}
                name={element.name}
                number={element.number}
                atomic_mass={Math.round(element.atomic_mass * 1e3) / 1e3}
                // color={element.block as 's' | 'p' | 'd' | 'f'}
              />
            ),
        )}
      </div>
    </>
  );
}
