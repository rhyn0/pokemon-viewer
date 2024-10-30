import BulbapediaLink from "@/components/bulbapedia-link";
import { TypographyH2 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import GrowthRateCarousel from "@/features/poke-growth-rates/components/growth-rate-carousel";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute(
    "/(pokemon)/pokemon_/(growth-rate)/growth-rate",
)({
    component: () => <GrowthRateIndex />,
});

function GrowthRateIndex() {
    // const slideRef = React.useRef<GrowthRateCarouselRefProps | null>(null);
    const navigate = useNavigate();
    const onScrollInView: React.ComponentProps<
        typeof GrowthRateCarousel
    >["onSlidesInView"] = React.useCallback(
        (currGrowthRateId) => {
            console.log("🚀 ~ onScrollInView ~ api, event:", currGrowthRateId);
            if (currGrowthRateId) {
                navigate({
                    from: Route.fullPath,
                    to: "$rateId",
                    params: { rateId: currGrowthRateId },
                });
            } else {
                navigate({ to: Route.fullPath });
            }
        },
        [navigate],
    );
    return (
        <main className="flex flex-col space-y-12 mx-20">
            <div className="flex justify-center flex-col">
                <TypographyH2>Growth Rates</TypographyH2>
                <TypographyP>
                    Check out{"  "}
                    <BulbapediaLink name="Experience">
                        Bulbapedia
                    </BulbapediaLink>{" "}
                    for greater detail.
                </TypographyP>
            </div>
            <div className="w-1/2 mx-auto h-fit">
                <GrowthRateCarousel onSlidesInView={onScrollInView} />
            </div>
            <Outlet />
        </main>
    );
}
