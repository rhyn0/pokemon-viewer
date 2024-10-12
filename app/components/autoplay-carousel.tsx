import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/cn";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export type FirmnessBerryCarouselProps = React.PropsWithChildren<
    {
        className?: string;
    } & Pick<React.ComponentProps<typeof Carousel>, "opts">
>;
export default function AutoplayCarousel({
    children,
    className,
    opts = { loop: true, align: "center" },
}: FirmnessBerryCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    );
    return (
        <Carousel
            plugins={[plugin.current]}
            className={cn("w-full max-w-xs", className)}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={opts}
        >
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
AutoplayCarousel.Item = CarouselItem;
