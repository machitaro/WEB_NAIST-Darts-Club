import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { GameCard } from './GameCard';
  

export const GameCarousel = (props) => {
    const { games, setApi } = props;
    return (
        <div className="relative w-1/2 md:w-1/3 flex justify-center mx-auto mb-16">
            <Carousel
                opts={{
                align: "center",
                loop: true,
                }}
                setApi={setApi}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {games.map((game, index) => (
                        <CarouselItem key={index}>
                        <div className="flex justify-center">
                            <GameCard {...game} />
                        </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -left-12 -translate-y-1/2" />
                <CarouselNext className="absolute top-1/2 -right-12 -translate-y-1/2"/>
            </Carousel>
        </div>
    );
};