import { getBerryQueryOptions } from "@/features/poke-berry/api/get-berry";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import Berry from "@/features/poke-berry/components/berry-detail";
import { TypographyH4 } from "@/components/typography/headings";

export const Route = createFileRoute("/(berry)/berry/$berryId")({
    loader: ({ context: { queryClient }, params: { berryId } }) =>
        queryClient.ensureQueryData(getBerryQueryOptions(berryId)),
    component: () => <BerryDetailPage />,
});

function BerryDetailPage() {
    const { berryId } = Route.useParams();
    const berryQuery = useSuspenseQuery(getBerryQueryOptions(berryId));
    return (
        <Berry berry={berryQuery.data}>
            <Berry.Image className="w-32 h-32" />
            <Berry.Detail name="name" />
            <Berry.Detail name="growth_time" />
            <Berry.Detail name="max_harvest" />
            <Berry.Detail name="natural_gift_power" />
            <Berry.Detail name="size" />
            <Berry.Detail name="smoothness" />
            <Berry.Detail name="soil_dryness" />
            <Berry.Link name="firmness" />
            <Berry.Link name="item" />
            <Berry.Link name="natural_gift_type" />
            <TypographyH4>Strength of Flavors</TypographyH4>
            <Berry.Flavors />
        </Berry>
    );
}
