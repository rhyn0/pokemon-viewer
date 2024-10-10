import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import type { BerryFirmnessT } from "../types";
import { cn } from "@/lib/cn";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import BerryCard from "./berry-ref-card";

export type FirmnessBerryCarouselProps = {
    firmness: BerryFirmnessT;
    className?: string;
};
export default function FirmnessBerryCarousel({
    firmness: { berries, name },
    className,
}: FirmnessBerryCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    );
    return (
        <div className={cn("justify-center flex", className)}>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                    loop: true,
                    align: "center",
                }}
            >
                <CarouselContent>
                    {berries.map((berry) => (
                        <CarouselItem
                            key={berry.name}
                            className="basis-full lg:basis-1/2"
                        >
                            <BerryCard firmnessName={name} berry={berry} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
