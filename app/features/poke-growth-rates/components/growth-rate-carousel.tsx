import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useGrowthRateListQuery from "@/features/poke-growth-rates/hooks/use-list-growth-rates";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/cn";

export type GrowthRateCarouselProps = {
    className?: string;
    onSlidesInView: (growthRateId: string | undefined) => void;
};
export default function GrowthRateCarousel({
    className,
    onSlidesInView: onChangeCurrentSlideInView,
}: GrowthRateCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const ref = React.useRef<GrowthRateCarouselRefProps | null>(null);
    const listGrowthRateQuery = useGrowthRateListQuery();
    const onSlidesInView = React.useCallback(
        (innerApi: CarouselApi) => {
            const idxInView = innerApi?.slidesInView()[0];
            if (idxInView !== undefined) {
                onChangeCurrentSlideInView(
                    listGrowthRateQuery.data.results[idxInView]?.name,
                );
            }
        },
        [onChangeCurrentSlideInView, listGrowthRateQuery.data.results],
    );
    React.useEffect(() => {
        if (!api) {
            return;
        }
        api.on("slidesInView", onSlidesInView);
        return () => {
            api.off("slidesInView", onSlidesInView);
        };
    }, [api, onSlidesInView]);

    return (
        <Carousel
            setApi={setApi}
            className={cn("", className)}
            opts={{
                loop: true,
                dragFree: true,
            }}
        >
            <CarouselContent>
                {listGrowthRateQuery.data.results.map((res) => (
                    <CarouselItem key={res.name}>
                        <GrowthRateCarouselCard name={res.name} ref={ref} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

type GrowthRateCarouselCardProps = {
    className?: string;
    name: string;
};
export type GrowthRateCarouselRefProps = {
    getName: () => string;
};
const GrowthRateCarouselCard = React.forwardRef<
    GrowthRateCarouselRefProps,
    GrowthRateCarouselCardProps
>(({ className, name }, ref) => {
    React.useImperativeHandle(
        ref,
        () => {
            return {
                getName() {
                    return name;
                },
            };
        },
        [name],
    );

    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    Growth rates are the speed with which Pokémon gain levels
                    through experience.
                </CardDescription>
            </CardHeader>
        </Card>
    );
});
GrowthRateCarouselCard.displayName = "GrowthRateCarouselCard";
