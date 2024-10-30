import { TypographyH2 } from "@/components/typography/headings";
import { TypographyBlockquote } from "@/components/typography/text";
import { getGrowthRateQueryOptions } from "@/features/poke-growth-rates/api/get-growth-rate";
import {
    ExamplePokemonDisplay,
    GrowthRateExperienceChart,
} from "@/features/poke-growth-rates/components/growth-rate-detail";
import { useGrowthRateQuery } from "@/features/poke-growth-rates/hooks/use-get-growth-rate";
import { englishGrowthRateDescZ } from "@/features/poke-growth-rates/types";
import { renderKatexToMathML } from "@/lib/render-katex";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/(pokemon)/pokemon_/(growth-rate)/growth-rate/$rateId",
)({
    loader: ({ context: { queryClient }, params: { rateId } }) =>
        queryClient.ensureQueryData(getGrowthRateQueryOptions(rateId)),
    component: () => <GrowthRateIdPage />,
});

function GrowthRateIdPage() {
    const { rateId } = Route.useParams();
    const growthQuery = useGrowthRateQuery({ id: rateId });
    const { descriptions } = englishGrowthRateDescZ.parse(growthQuery.data);
    const enDescription = descriptions[0]?.description as string;
    const texHtml = renderKatexToMathML(growthQuery.data.formula);

    return (
        <div className="mx-20 grid place-items-center gap-2">
            <TypographyH2 className="capitalize">{enDescription}</TypographyH2>
            <GrowthRateExperienceChart levels={growthQuery.data.levels} />
            <TypographyBlockquote>
                The formula used to calculate the rate at which the Pokémon
                species gains level.
                <br />
                <div
                    className="text-center text-3xl"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{
                        __html: texHtml,
                    }}
                />
            </TypographyBlockquote>
            <ExamplePokemonDisplay
                growthRate={growthQuery.data.name}
                species={growthQuery.data.pokemon_species.map(
                    (res) => res.name,
                )}
            />
        </div>
    );
}
