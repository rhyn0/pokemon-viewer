import { getBerryFirmnessInfiniteQueryOptions } from "@/features/poke-berry-firmness/api/list-firmness";
import { createFileRoute } from "@tanstack/react-router";
import FirmnessGrid from "@/features/poke-berry-firmness/components/firmness-grid";
import type { FirmnessGridProps } from "@/features/poke-berry-firmness/components/firmness-grid";
import { TypographyH1 } from "@/components/typography/headings";

export const Route = createFileRoute("/berry_/firmness/")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(
            getBerryFirmnessInfiniteQueryOptions,
        ),
    component: () => <BerryFirmnessIndex />,
});

function BerryFirmnessIndex() {
    return (
        <div>
            <TypographyH1>Hello /_berry/berry/firmness/!</TypographyH1>
            <FirmnessGrid
                to="/berry/firmness/$firmnessId/modal"
                paramName="firmnessId"
                mask={(firmnessId) =>
                    ({
                        to: "/berry/firmness/$firmnessId",
                        params: { firmnessId },
                    }) as ReturnType<
                        Exclude<FirmnessGridProps["mask"], undefined>
                    >
                }
            />
        </div>
    );
}
