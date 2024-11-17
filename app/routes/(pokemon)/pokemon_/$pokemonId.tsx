import { TypographyH1 } from "@/components/typography/headings";
import { getPokemonQueryOptions } from "@/features/pokemon/api/get-pokemon";
import {
    PokemonDetailCard,
    ExtraDetails,
} from "@/features/pokemon/components/full-detail-card";
import { usePokemonQuery } from "@/features/pokemon/hooks/use-get-pokemon";
import { createFileRoute } from "@tanstack/react-router";

type SearchParamsT = {
    gameVersion: string | undefined;
};

export const Route = createFileRoute("/(pokemon)/pokemon_/$pokemonId")({
    loader: ({ context: { queryClient }, params: { pokemonId } }) =>
        queryClient.ensureQueryData(getPokemonQueryOptions(pokemonId)),
    component: () => <PokemonPage />,
    validateSearch: (searchRecord: Record<string, unknown>): SearchParamsT => ({
        gameVersion: searchRecord.gameVersion as string | undefined,
    }),
});

function PokemonPage() {
    const { pokemonId } = Route.useParams();
    const pokemonQuery = usePokemonQuery({ id: pokemonId });

    return (
        <main className="bg-gradient-to-br from-blue-400 to-purple-500 p-4 min-h-screen h-fit">
            <TypographyH1 className="capitalize ml-10">
                {pokemonQuery.data.name}
            </TypographyH1>
            <div className="flex flex-col justify-center align-middle mx-auto w-2/3">
                <PokemonDetailCard pokemon={pokemonQuery.data} />
                <ExtraDetails pokemon={pokemonQuery.data} route={Route.id} />
            </div>
        </main>
    );
}
