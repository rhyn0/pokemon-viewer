import { getPokeCharacteristicQueryOptions } from "@/features/pokemon-characteristics/api/get-characteristic";
import { CharacteristicDetails } from "@/features/pokemon-characteristics/components/characteristic-details";
import { usePokeCharacteristicQuery } from "@/features/pokemon-characteristics/hooks/use-get-characteristic";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/(pokemon)/pokemon_/characteristic/$characteristicId",
)({
    loader: ({ context: { queryClient }, params: { characteristicId } }) =>
        queryClient.ensureQueryData(
            getPokeCharacteristicQueryOptions(characteristicId),
        ),
    component: () => <CharacteristicDetailPage />,
});

function CharacteristicDetailPage() {
    const { characteristicId } = Route.useParams();
    const pokeCharacteristicQuery = usePokeCharacteristicQuery({
        id: characteristicId,
    });

    return (
        <main>
            <CharacteristicDetails
                characteristic={pokeCharacteristicQuery.data}
            />
        </main>
    );
}
