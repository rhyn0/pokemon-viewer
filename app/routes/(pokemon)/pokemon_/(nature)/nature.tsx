import { getListNatureInfiniteQueryOptions } from "@/features/nature/api/list-nature";
import PokeNatureList from "@/features/nature/components/nature-list";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon_/(nature)/nature")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(getListNatureInfiniteQueryOptions),
    component: () => <PokeNatureListLayout />,
});

function PokeNatureListLayout() {
    return (
        <main className="h-screen w-screen">
            <div className="flex flex-row h-fit">
                <div className="h-screen max-w-fit">
                    <PokeNatureList />
                </div>
                <div className="ml-2 w-full">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
