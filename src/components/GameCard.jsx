import { Card, CardContent } from "@/components/ui/card";

export const GameCard = ({ title }) => {
    return (
      <Card className="aspect-square w-full bg-main">
        <CardContent className="flex flex-col justify-center items-center h-full p-4 sm:p-6 text-center">
          <div className="text-2xl md:text-3xl font-bold mb-2 text-white">{title}</div>
        </CardContent>
      </Card>
    );
};