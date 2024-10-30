import { TypographyH1 } from "@/components/typography/headings";
import { getCharacteristicInfiniteQueryOptions } from "@/features/pokemon-characteristics/api/list-characteristics";
import CharacteristicGrid from "@/features/pokemon-characteristics/components/characteristic-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon_/characteristic/")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(
            getCharacteristicInfiniteQueryOptions,
        ),
    component: () => <PokemonCharacteristicIndex />,
});

function PokemonCharacteristicIndex() {
    return (
        <main>
            <TypographyH1 className="text-center">
                Pokémon Characteristics
            </TypographyH1>
            <CharacteristicGrid />
        </main>
    );
}
