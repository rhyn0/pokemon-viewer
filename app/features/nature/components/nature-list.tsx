import useInView from "@/hooks/in-view";
import useNatureListInfiniteQuery from "../hooks/use-list-nature";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/cn";
import { Link } from "@tanstack/react-router";
import { TypographyH2 } from "@/components/typography/headings";
import { Button } from "@/components/ui/button";
import React from "react";

export type PokeNatureListProps = {
    className?: string;
};
export default function PokeNatureList({ className }: PokeNatureListProps) {
    const natureInfQuery = useNatureListInfiniteQuery();
    const { ref, inView } = useInView<HTMLDivElement>();

    React.useEffect(() => {
        if (inView) {
            natureInfQuery.fetchNextPage();
        }
    }, [inView, natureInfQuery]);

    if (natureInfQuery.isLoading) {
        return (
            <div className="flex h-48 w-full items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    const natures =
        natureInfQuery.data?.pages.flatMap((page) => page.results) ?? [];

    return (
        <div
            className={cn(
                "h-screen w-48 flex flex-col bg-slate-200 dark:bg-gray-900 px-2 mt-1",
                className,
            )}
        >
            <Link to="/pokemon/nature" preload="intent">
                <TypographyH2 className="text-center">Natures</TypographyH2>
            </Link>
            <div className="space-y-1 overflow-y-scroll flex flex-col ">
                {natures.map((nature) => (
                    <Button
                        key={nature.name}
                        variant="link"
                        className=" shadow-sm shadow-secondary-foreground w-full"
                        asChild
                    >
                        <Link
                            to="/pokemon/nature/$natureId"
                            params={{ natureId: nature.name }}
                            preload="intent"
                            className="text-center font-semi-bold"
                        >
                            {nature.name}
                        </Link>
                    </Button>
                ))}
                <div
                    ref={ref}
                    className=" bg-background text-primary opacity-80 w-full h-10 text-center"
                >
                    {natureInfQuery.isFetchingNextPage
                        ? "Loading more..."
                        : natureInfQuery.hasNextPage
                          ? null
                          : "Nothing more to load"}
                </div>
            </div>
        </div>
    );
}
