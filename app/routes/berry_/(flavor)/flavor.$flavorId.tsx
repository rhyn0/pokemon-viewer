import AutoplayCarousel from "@/components/autoplay-carousel";
import { TypographyH2, TypographyH3 } from "@/components/typography/headings";
import { getBerryFlavorQueryOptions } from "@/features/poke-berry-flavor/api/get-flavor";
import useBerryFlavorQuery from "@/features/poke-berry-flavor/hooks/use-berry-flavor";
import Berry from "@/features/poke-berry/components/berry-detail";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { PokeBerryT } from "@/features/poke-berry/types";
import { createFileRoute, Link } from "@tanstack/react-router";
import toProperCase from "@/lib/to-proper";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/berry_/(flavor)/flavor/$flavorId")({
    loader: ({ context: { queryClient }, params: { flavorId } }) =>
        queryClient.ensureQueryData(getBerryFlavorQueryOptions(flavorId)),
    component: () => <BerryFlavorDetails />,
});

function BerryFlavorDetails() {
    const { flavorId } = Route.useParams();
    const berryQuery = useBerryFlavorQuery({ flavorId });
    const properFlavorName = toProperCase(berryQuery.data.name);
    return (
        <main className="flex flex-col mx-32 justify-center">
            <TypographyH2>
                Berries of{" "}
                <span className="capitalize">{berryQuery.data.name}</span>{" "}
                Firmness
            </TypographyH2>
            <div className="justify-center flex">
                <AutoplayCarousel>
                    {berryQuery.data.berries.map((berryRef) => (
                        <AutoplayCarousel.Item
                            key={berryRef.berry.name}
                            className="basis-full lg:basis-2/3"
                        >
                            <Berry
                                berry={berryRef.berry as unknown as PokeBerryT}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            <Berry.Detail name="name" />
                                            <TypographyH3>
                                                Potency: {berryRef.potency}
                                            </TypographyH3>
                                        </CardTitle>
                                        <CardDescription>
                                            One of the berries of the{" "}
                                            {properFlavorName} flavor category.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Berry.Image />
                                        <Button asChild variant="link">
                                            <Link
                                                to="/berry/$berryId"
                                                params={{
                                                    berryId:
                                                        berryRef.berry.name,
                                                }}
                                            >
                                                View Details
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Berry>
                        </AutoplayCarousel.Item>
                    ))}
                </AutoplayCarousel>
            </div>
        </main>
    );
}
