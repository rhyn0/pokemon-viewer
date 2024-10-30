import ImagePlaceholder from "@/components/image-placeholder";
import { TypographyH1 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pokemon)/pokemon_/(nature)/nature/")({
    component: () => <PokeNatureExplanation />,
});

function PokeNatureExplanation() {
    return (
        <div className="flex flex-col space-y-4 items-center justify-center h-full">
            <TypographyH1>Pokémon Nature Viewer</TypographyH1>
            <ImagePlaceholder />
            <TypographyP className="text-center">
                Inspect the specifics of Pokémon natures.
                <br />
                Natures influence how a Pokémon's stats grow. Click on a Nature
                for more details.
            </TypographyP>
        </div>
    );
}
