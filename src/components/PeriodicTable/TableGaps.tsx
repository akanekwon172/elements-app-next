import { Card } from '@/components/ui/card';

interface TableGapsProps {}

export default function TableGaps({}: TableGapsProps) {
  // Span the empty space between the elements in the top 3 periods.
  const HydrogenHeliumGap = (
    <div className="col-span-16 col-start-3 row-start-2" />
  );
  const BerylliumBoronGap = (
    <div className="col-span-10 col-start-4 row-start-3" />
  );
  const MagnesiumAluminiumGap = (
    <div className="col-span-10 col-start-4 row-start-4" />
  );

  // Spans the empty space that is allocated for the lanthanide and actinide elements seperator.
  const LathanideSeperatorCard = (
    <Card className="col-start-4 row-start-7 bg-green-500" />
  );
  const ActinideSeperatorCard = (
    <Card className="col-start-4 row-start-8 bg-blue-500" />
  );

  // Creates a small gap between the bottom 2 rows of the elements.
  const BottomElementsGap = <div className="col-span-19 row-start-9 h-1" />;

  // Spans the cap on the left side of lanthanide elements.
  const LanthanideRightGap = (
    <div className="col-span-4 col-start-1 row-start-10" />
  );
  // Spans the cap on the left side of actinide elements.
  const ActinideRightGap = (
    <div className="col-span-4 col-start-1 row-start-11" />
  );

  return (
    <>
      {HydrogenHeliumGap}
      {BerylliumBoronGap}
      {MagnesiumAluminiumGap}

      {LathanideSeperatorCard}
      {ActinideSeperatorCard}

      {LanthanideRightGap}
      {ActinideRightGap}
      {BottomElementsGap}
    </>
  );
}
