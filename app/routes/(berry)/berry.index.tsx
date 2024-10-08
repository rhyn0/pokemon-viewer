import ImagePlaceholder from "@/components/image-placeholder";
import { createFileRoute } from "@tanstack/react-router";
import { TypographyH1 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";

export const Route = createFileRoute("/(berry)/berry/")({
    component: () => <BerryIndex />,
});

function BerryIndex() {
    return (
        <div className="flex flex-col space-y-4 items-center justify-center h-full">
            <TypographyH1>Poké Berry Viewer</TypographyH1>
            <ImagePlaceholder />
            <TypographyP className="text-center">
                Inspect the specifics of any Poké Berry.
                <br />
                Click on a Berry Name to view more details.
            </TypographyP>
        </div>
    );
}
