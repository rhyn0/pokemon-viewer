import { getNatureQueryOptions } from "@/features/nature/api/get-nature";
import { PokemonNatureCardComponent } from "@/features/nature/components/pokemon-nature-card";
import { useNatureQuery } from "@/features/nature/hooks/use-get-nature";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/(pokemon)/pokemon_/(nature)/nature/$natureId",
)({
    loader: ({ context: { queryClient }, params: { natureId } }) =>
        queryClient.ensureQueryData(getNatureQueryOptions(natureId)),
    component: () => <PokeNatureDetailPage />,
});

function PokeNatureDetailPage() {
    const { natureId } = Route.useParams();
    const natureQuery = useNatureQuery({ id: natureId });
    return <PokemonNatureCardComponent nature={natureQuery.data} />;
}
