import { TypographyH1, TypographyH2 } from "@/components/typography/headings";
import {
    TypographyInlineCode,
    TypographyP,
} from "@/components/typography/text";
import { getPokeAbilityQueryOptions } from "@/features/pokemon-abilities/api/get-ability";
import Ability from "@/features/pokemon-abilities/components/ability-details-card";
import usePokeAbilityQuery from "@/features/pokemon-abilities/hooks/use-get-ability";
import { englishPokemonAbilityZ } from "@/features/pokemon-abilities/types";
import toProper from "@/lib/to-proper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/(pokemon)/(ability)/pokemon/ability/$abilityId",
)({
    loader: ({ context: { queryClient }, params: { abilityId } }) =>
        queryClient.ensureQueryData(getPokeAbilityQueryOptions(abilityId)),
    component: () => <SpecificAbilityContent />,
});

function SpecificAbilityContent() {
    const { abilityId } = Route.useParams();
    const abilityQuery = usePokeAbilityQuery({ id: abilityId });

    const englishAbility = englishPokemonAbilityZ.parse(abilityQuery.data);

    return (
        <main className="m-auto justify-center flex flex-col">
            <Ability ability={englishAbility}>
                <Ability.Detail
                    name="name"
                    render={({ value }) => (
                        <TypographyH1>{toProper(value)}</TypographyH1>
                    )}
                />
                <Ability.Detail
                    name="is_main_series"
                    render={({ value }) => (
                        <TypographyH2>
                            Is Main Series:{" "}
                            <TypographyInlineCode>
                                {value ? "Yes" : "No"}
                            </TypographyInlineCode>
                        </TypographyH2>
                    )}
                />
                <Ability.Detail
                    name="generation"
                    render={({ value }) => (
                        <TypographyP>Introduced in {value.name}</TypographyP>
                    )}
                />

                <Ability.Text name="effect_entries" />
                <Ability.Changes />
                <Ability.Text name="flavor_text_entries" />
            </Ability>
        </main>
    );
}
