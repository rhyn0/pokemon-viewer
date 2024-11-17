import ScrollToTop from "@/components/scroll-to-top";
import { getListPokemonQueryOptions } from "@/features/pokemon/api/list-pokemon";
import PokemonGrid from "@/features/pokemon/components/who-is-that-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon/")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(getListPokemonQueryOptions),
    component: () => <PokemonIndexRoute />,
});

function PokemonIndexRoute() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Pokémon Grid
            </h1>
            <PokemonGrid />
            <ScrollToTop />
        </main>
    );
}
