import { createFileRoute } from "@tanstack/react-router";
import PokeEggSpeciesCarousel from "@/features/poke-egg-groups/components/egg-group-detail";
import { TypographyH1 } from "@/components/typography/headings";
import { usePokeEggGroupQuery } from "@/features/poke-egg-groups/hooks/use-get-egg-group";
import { getPokeEggGroupQueryOptions } from "@/features/poke-egg-groups/api/get-egg-group";
export const Route = createFileRoute(
    "/(pokemon)/pokemon/egg-group/$eggGroupId",
)({
    loader: ({ context: { queryClient }, params: { eggGroupId } }) =>
        queryClient.ensureQueryData(getPokeEggGroupQueryOptions(eggGroupId)),
    component: () => <EggGroupDetail />,
});

function EggGroupDetail() {
    const { eggGroupId } = Route.useParams();
    const eggGroupDetailQuery = usePokeEggGroupQuery({ id: eggGroupId });
    return (
        <main className="mx-auto">
            <div className="grid grid-cols-1">
                <TypographyH1 className="justify-self-center text-center uppercase">
                    {eggGroupDetailQuery.data.name}
                </TypographyH1>
                <div className="justify-self-center align-middle">
                    <PokeEggSpeciesCarousel
                        species={eggGroupDetailQuery.data.pokemon_species}
                    />
                </div>
            </div>
        </main>
    );
}
