import ItemGrid from "@/components/item-grid";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import usePokeEggGroupPaginatedQuery from "@/features/poke-egg-groups/hooks/use-list-egg-group";
import { cn } from "@/lib/cn";
import { getRouteApi, Link } from "@tanstack/react-router";
import React from "react";

const Route = getRouteApi("/(pokemon)/pokemon_/egg-group/");

export type PaginatedEggGroupGridProps = {
    className?: string;
};

export default function PaginatedEggGroupGrid({
    className,
}: PaginatedEggGroupGridProps) {
    const { page } = Route.useSearch();
    const eggGroupsQuery = usePokeEggGroupPaginatedQuery({ page });
    const eggGroups = eggGroupsQuery.data.results;

    const hasPreviousPage = React.useMemo(
        () => eggGroupsQuery.data.previous !== null,
        [eggGroupsQuery.data.previous],
    );
    const hasNextPage = React.useMemo(
        () => eggGroupsQuery.data.next !== null,
        [eggGroupsQuery.data.next],
    );
    return (
        <div className={cn("space-y-8", className)}>
            <ItemGrid
                items={eggGroups}
                renderItem={({ item }) => (
                    <div
                        key={item.name}
                        className="border border-spacing-1 w-full h-full flex justify-center align-middle mx-10"
                    >
                        <EggGroupLink name={item.name} />
                    </div>
                )}
            />
            <Pagination>
                <PaginationPrevious
                    disabled={!hasPreviousPage}
                    search={{ page: page - 1 }}
                    to="."
                    className="aria-disabled:hover:bg-transparent select-none"
                />
                <PaginationContent>
                    {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                disabled={page === i}
                                search={{ page: i }}
                                isActive={page === i}
                                to="."
                            >
                                {i}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </PaginationContent>
                <PaginationNext
                    disabled={!hasNextPage}
                    search={{ page: page + 1 }}
                    to="."
                    className="aria-disabled:hover:bg-transparent select-none"
                />
            </Pagination>
        </div>
    );
}

function EggGroupLink({ name }: { name: string }) {
    return (
        <Button asChild variant="link">
            <Link
                to="/pokemon/egg-group/$eggGroupId"
                params={{ eggGroupId: name }}
            >
                {name.toLocaleUpperCase()}
            </Link>
        </Button>
    );
}
