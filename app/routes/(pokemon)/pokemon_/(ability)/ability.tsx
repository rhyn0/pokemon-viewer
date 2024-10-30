import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import InfiniteAbilityList from "@/features/pokemon-abilities/components/infinite-ability-list";
import { getAbilityInfiniteQueryOptions } from "@/features/pokemon-abilities/api/list-abilities";
import { TypographyH2 } from "@/components/typography/headings";

export const Route = createFileRoute("/(pokemon)/pokemon_/(ability)/ability")({
    component: () => <AbilityListPage />,
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(getAbilityInfiniteQueryOptions),
});

function AbilityListPage() {
    return (
        <main>
            <div className="w-screen flex flex-row">
                <div className="h-screen w-fit flex flex-col bg-secondary">
                    <Link to="/berry" preload="intent">
                        <TypographyH2 className="text-center">
                            Abilities
                        </TypographyH2>
                    </Link>
                    <InfiniteAbilityList />
                </div>
                <div className="ml-2 w-full">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
