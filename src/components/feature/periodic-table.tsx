import useSWRImmutable from 'swr/immutable';

import ElementCard from '@/components/Elements/ElementCard';

/* interface Response {
  users: { id: number; name: string }[];
}*/
const fetcher = (req: string) => fetch(req).then((res) => res.json());

export default function PeriodicTable() {
  const { data, error, isLoading } = useSWRImmutable<CElement[]>(
    '/api/elements',
    fetcher,
  );
  // エラー
  if (error) return <div>failed to load</div>;
  // 読み込み中
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-18 grid-rows-7 justify-center gap-2.5">
      <div className="col-2/span_16 row-start-1 row-end-1" />
      <div className="col-3/span_10 row-1/4" />
      {data?.map(
        (element) =>
          (element.number < 57 || element.number >= 71)
          && (element.number < 89 || element.number >= 103) && (
            <ElementCard
              key={element.number}
              symbol={element.symbol}
              name={element.name}
              number={element.number}
              atomicMass={Math.round(element.atomicMass * 1e3) / 1e3}
             // color={element.block as 's' | 'p' | 'd' | 'f'}
            />
          ),
      )}
    </div>
  );
}
