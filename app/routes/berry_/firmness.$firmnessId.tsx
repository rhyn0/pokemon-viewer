import { TypographyH2 } from "@/components/typography/headings";
import { getBerryFirmnessQueryOptions } from "@/features/poke-berry-firmness/api/get-firmness";
import FirmnessBerryCarousel from "@/features/poke-berry-firmness/components/firmness-berry-carousel";
import useBerryFirmnessQuery from "@/features/poke-berry-firmness/hooks/use-berry-firmness";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/berry/firmness/$firmnessId")({
    loader: ({ context: { queryClient }, params: { firmnessId } }) => {
        queryClient.ensureQueryData(getBerryFirmnessQueryOptions(firmnessId));
    },
    component: () => <BerryFirmnessDetails />,
});

function BerryFirmnessDetails() {
    const { firmnessId } = Route.useParams();
    const berryQuery = useBerryFirmnessQuery({ firmnessId });
    return (
        <main className="flex flex-col mx-32 justify-center">
            <TypographyH2>
                Berries of{" "}
                <span className="capitalize">{berryQuery.data.name}</span>{" "}
                Firmness
            </TypographyH2>
            <FirmnessBerryCarousel firmness={berryQuery.data} />
        </main>
    );
}
