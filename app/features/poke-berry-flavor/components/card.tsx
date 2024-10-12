import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { PokeBerryT } from "@/features/poke-berry/types";
import type { BerryFlavorT } from "../types";
import Berry from "@/features/poke-berry/components/berry-detail";
import toProperCase from "@/lib/to-proper";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { TypographyH3 } from "@/components/typography/headings";

export default function BerryCard({
    berryFlavor: { berry, potency },
    flavorName,
}: { berryFlavor: BerryFlavorT["berries"][number]; flavorName: string }) {
    const properflavorName = toProperCase(flavorName);
    // cheating the types here because I know what im doing
    return (
        <Berry berry={berry as unknown as PokeBerryT}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Berry.Detail name="name" />
                    </CardTitle>
                    <CardDescription>
                        One of the berries of the {properflavorName} flavor
                        category.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <TypographyH3>Potency: {potency}</TypographyH3>
                    <Berry.Image />
                    <Button asChild variant="link">
                        <Link
                            to="/berry/$berryId"
                            params={{ berryId: berry.name }}
                        >
                            View Details
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </Berry>
    );
}
