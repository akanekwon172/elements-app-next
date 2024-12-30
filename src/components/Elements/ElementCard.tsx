import { Card, CardContent } from '@/components/ui/card';

interface Props {
  name: string;
  symbol: string;
  number: number;
  atomic_mass: number;
  // color: "s" | "p" | "d" | "f"; active?: boolean;
}
/* const bg = cn({
  base: "cursor-pointer p-0.6 transition-all ease-linear duration-300",
  variants: {
    color: {
      p: "bg-blue-500",
      s: "bg-red-500",
      d: "bg-green-500",
      f: "bg-purple-500",
    },
  },
}); */

const ElementCard: React.FC<Props> = ({
  name,
  symbol,
  number,
  atomic_mass,
  // color = "p", active,
}) => {
  return (
    <Card role="button">
      <CardContent className="flex h-full flex-col justify-center px-0.5 py-2">
        <div className="mb-0.5 flex w-full flex-row justify-between">
          <span className="text-base">{symbol}</span>
          <span className="text-base">{number}</span>
        </div>
        <span className="text-xs">{name}</span>
        <span className="text-xs">{atomic_mass}</span>
      </CardContent>
    </Card>
  );
};

export default ElementCard;
