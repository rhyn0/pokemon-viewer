import { Button } from "@/components/ui/button";
import { useInfiniteBerries } from "../api/get-berries";
import { Spinner } from "@/components/ui/spinner";
import useInView from "@/hooks/in-view";
import { cn } from "@/lib/cn";
import React from "react";
import { Link } from "@tanstack/react-router";
import { TypographyH2 } from "@/components/typography/headings";

export type BerryListProps = {
    className?: string;
};

export default function BerryList({ className }: BerryListProps) {
    const berriesQuery = useInfiniteBerries();
    const { ref, inView } = useInView<HTMLDivElement>();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (inView) {
                berriesQuery.fetchNextPage();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [inView, berriesQuery.fetchNextPage]);

    if (berriesQuery.isLoading) {
        return (
            <div className="flex h-48 w-full items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    // TODO<@rhyn0>: Handle desire to sort by name
    // right now results are by ID from the API, which should be default
    // but when user wants to sort by name, we should sort the results
    const berries =
        berriesQuery.data?.pages.flatMap((page) => page.results) ?? [];

    return (
        <div
            className={cn(
                "h-80 w-48 flex flex-col bg-slate-200 dark:bg-gray-900 px-2 mt-1",
                className,
            )}
        >
            <Link to="/berry" preload="intent">
                <TypographyH2 className="text-center">Berries</TypographyH2>
            </Link>
            <div className="space-y-1 overflow-y-scroll flex flex-col ">
                {berries.map((berry) => (
                    <Button
                        key={berry.name}
                        variant="link"
                        className=" shadow-sm shadow-secondary-foreground w-full"
                        asChild
                    >
                        <Link
                            to="/berry/$berryId"
                            params={{ berryId: berry.name }}
                            preload="intent"
                            className="text-center font-semi-bold"
                        >
                            {berry.name}
                        </Link>
                    </Button>
                ))}
                <div
                    ref={ref}
                    className=" bg-background text-primary opacity-80 w-full h-10 text-center"
                >
                    {berriesQuery.isFetchingNextPage
                        ? "Loading more..."
                        : berriesQuery.hasNextPage
                          ? null
                          : "Nothing more to load"}
                </div>
            </div>
        </div>
    );
}
