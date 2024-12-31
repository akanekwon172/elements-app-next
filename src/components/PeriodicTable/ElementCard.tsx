import { Card } from '@/components/ui/card';
import { actinidesAtomicNumbers, lanthanidesAtomicNumbers } from '@/constant';
import { ElementDetailsTypes } from '@/types/elements';

interface ElementProps {
  element: ElementDetailsTypes;
}

export default function ElementCard({ element }: ElementProps) {
  const isLanthanide = lanthanidesAtomicNumbers.some(
    (an) => an === element.number,
  );
  const isActinide = actinidesAtomicNumbers.some((an) => an === element.number);

  const HEADER_ROW_OFFSET = 1;
  const BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET = 1;
  const elementRowStart = isActinide
    ? 9 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
    : isLanthanide
      ? 8 + HEADER_ROW_OFFSET + BOTTOM_ELEMENTS_SEPERATOR_ROW_OFFSET
      : element.period + HEADER_ROW_OFFSET;

  // Tailwind CSS classes cannot be dynamically generated, so a map is used to map the row start
  // value to the appropriate class.
  const ElementRowStarts: { [key: number]: string } = {
    2: 'row-start-2',
    3: 'row-start-3',
    4: 'row-start-4',
    5: 'row-start-5',
    6: 'row-start-6',
    7: 'row-start-7',
    8: 'row-start-8',
    10: 'row-start-10',
    11: 'row-start-11',
  };

  return (
    <Card
      className={`col-span-1 p-1 ${ElementRowStarts[elementRowStart]} overflow-hidden text-[12px]`}
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
  );
}
