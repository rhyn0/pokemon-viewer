import ImagePlaceholder from "@/components/image-placeholder";
import { TypographyH1 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon/(ability)/ability/")({
    component: () => <AbilityIndexContent />,
});

function AbilityIndexContent() {
    return (
        <div className="flex flex-col space-y-4 items-center justify-center h-full">
            <TypographyH1>Pokémon Abilities</TypographyH1>
            <ImagePlaceholder />
            <TypographyP className="text-center">
                Inspect the details of all Pokémon abilities.
                <br />
                Click on an Ability Name to view more details.
            </TypographyP>
        </div>
    );
}
