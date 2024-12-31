import { Card } from '@/components/ui/card';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constant';
import { ElementDetailsTypes } from '@/types/elements';

interface ElementProps {
  element: ElementDetailsTypes;
  nextElement: ElementDetailsTypes | undefined;
}

export default function ElementCard({ element, nextElement }: ElementProps) {
  // Element period refers to its row in the periodic table.
  // Element group refers to its column in the periodic table.

  const isLanthanide = lanthanidesAtomicNumbers.some(
    (an) => an === element.number,
  );
  const isActinide = actinidesAtomicNumbers.some((an) => an === element.number);

  const isFirstLanthanide = element.number === lanthanidesAtomicNumbers[0];
  const isFirstActinide = element.number === actinidesAtomicNumbers[0];

  const isLastBeforeLanthanide
    = element.number === lanthanidesAtomicNumbers[0] - 1;
  const isLastBeforeActinide = element.number === actinidesAtomicNumbers[0] - 1;

  const elementRowStart = isActinide
    ? 9 + 1
    : isLanthanide
      ? 8 + 1
      : element.period;

  const emptyColSpan
    = nextElement && +element.group < 18
      ? +(+nextElement.group - +element.group - 1)
      : null;

  // Tailwind CSS doesnt allow props to be used to build class names dynamically.
  const colSpanVariants: { [key: number]: string } = {
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
    13: 'col-span-13',
    14: 'col-span-14',
    15: 'col-span-15',
    16: 'col-span-16',
  };

  return (
    <>
      {/* The following div spans the empty space before the first element in either the
      lanthanide or actinide elements. */}
      <div
        className={
          isFirstLanthanide || isFirstActinide ? 'col-span-3' : 'hidden'
        }
      />

      <Card
        className={`row-start-${elementRowStart} col-span-1 w-[74px] text-wrap p-1 text-[12px]`}
      >
        <div>
          <p className="flex items-center justify-between">{element.number}</p>
        </div>
        <h2 className="scroll-m-2 text-center text-xl font-semibold tracking-tight">
          {element.symbol}
        </h2>
        <p className="overflow-hidden text-ellipsis text-center">
          {element.name}
        </p>
        <p className="text-center">{element.atomic_mass}</p>
      </Card>

      {/* The following div spans the empty space that is allocated for the lanthanide and actinide elements seperator. */}
      {isLastBeforeLanthanide && <Card className="min-w-[74px] bg-green-500" />}
      {isLastBeforeActinide && <Card className="min-w-[74px] bg-blue-500" />}
      {isLastBeforeLanthanide && (
        <div className="col-span-18 row-start-8 h-2" />
      )}

      {/* The following div spans the empty space between the elements in the top 3 periods. */}
      {element.number <= 56 && (
        <div
          className={`${emptyColSpan ? `${colSpanVariants[emptyColSpan]}` : 'hidden'}`}
        />
      )}
    </>
  );
}
