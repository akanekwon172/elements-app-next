import { useMemo } from 'react';

import { ArrowDown, ArrowRight } from 'lucide-react';

export default function TableHeaders() {
  const PeriodHeaders = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => (
        <div
          key={`period-header-${i + 1}`}
          className={`row-start-${i + 2} col-start-1 flex w-8 items-center justify-center p-1 text-[12px]`}
        >
          {i + 1}
        </div>
      )),
    [],
  );

  const GroupHeaders = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => (
        <div
          key={`group-header-${i + 1}`}
          className={`col-start-${i + 2} row-start-1 flex h-8 items-center justify-center p-1 text-[12px]`}
        >
          {i + 1}
        </div>
      )),
    [],
  );

  return (
    <>
      <div className="col-start-1 row-start-1 flex h-8 flex-col items-center justify-center px-1 text-center text-[12px]">
        <p className="flex h-1/2 items-center justify-center">
          <span className="w-3">G</span>
          <ArrowRight className="size-3" />
        </p>

        <p className="flex h-1/2 items-center justify-center">
          <ArrowDown className="size-3" />
          <span className="w-3">P</span>
        </p>
      </div>

      {PeriodHeaders}
      {GroupHeaders}
    </>
  );
}
