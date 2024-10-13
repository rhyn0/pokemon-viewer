import { TypographySmall } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import useBerryFlavorInfiniteQuery from "@/features/pokemon-abilities/hooks/use-list-abilities";
import useInView from "@/hooks/in-view";
import { cn } from "@/lib/cn";
import toProper from "@/lib/to-proper";
import { Link } from "@tanstack/react-router";
import React from "react";

export default function InfiniteAbilityList({
    className,
}: { className?: string }) {
    const { data, fetchNextPage, hasNextPage, isFetching } =
        useBerryFlavorInfiniteQuery();
    const { ref, inView } = useInView<HTMLDivElement>();

    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    const abilities = data?.pages.flatMap((page) => page.results);
    return (
        <div
            className={cn(
                "space-y-1 overflow-y-scroll flex flex-col min-w-44",
                className,
            )}
            style={{
                scrollbarWidth: "none",
            }}
        >
            <ul className="justify-center w-full">
                {abilities.map((ability) => (
                    <li
                        key={ability.name}
                        className="shadow-sm shadow-secondary-foreground/70 w-full text-center"
                    >
                        <Button
                            asChild
                            variant="link"
                            className="w-full text-base h-8"
                        >
                            <Link
                                to="/pokemon/ability/$abilityId"
                                params={{ abilityId: ability.name }}
                            >
                                {toProper(ability.name)}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
            <div ref={ref} className="" />
            <div className="sticky bottom-0 items-center min-h-10 flex justify-center top-auto z-10 bg-background border border-black/40">
                <TypographySmall className="text-center text-muted-foreground italic">
                    {isFetching
                        ? "Loading..."
                        : hasNextPage
                          ? "Can Load More"
                          : "Nothing more to load"}
                </TypographySmall>
            </div>
        </div>
    );
}
