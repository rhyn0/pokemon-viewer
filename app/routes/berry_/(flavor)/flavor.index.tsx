import { createFileRoute } from "@tanstack/react-router";
import FlavorGrid from "@/features/poke-berry-flavor/components/grid";
import type { GridProps } from "@/features/poke-berry-flavor/components/grid";
import { getBerryFlavorInfiniteQueryOptions } from "@/features/poke-berry-flavor/api/list-flavor";
import { TypographyH1 } from "@/components/typography/headings";

export const Route = createFileRoute("/berry/(flavor)/flavor/")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(getBerryFlavorInfiniteQueryOptions),
    component: () => <BerryFlavorIndex />,
});

function BerryFlavorIndex() {
    return (
        <div>
            <TypographyH1 className="justify-center flex text-center">
                Berry Flavors
            </TypographyH1>
            <FlavorGrid
                to="/berry/flavor/$flavorId/modal"
                paramName="flavorId"
                mask={(flavorId) =>
                    ({
                        to: "/berry/flavor/$flavorId",
                        params: { flavorId },
                    }) as ReturnType<Exclude<GridProps["mask"], undefined>>
                }
            />
        </div>
    );
}
