import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { BerryRefT, PokeBerryT } from "@/features/poke-berry/types";
import Berry from "@/features/poke-berry/components/berry-detail";
import toProperCase from "@/lib/to-proper";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function BerryCard({
    berry,
    firmnessName,
}: { berry: BerryRefT; firmnessName: string }) {
    const properFirmnessName = toProperCase(firmnessName);
    // cheating the types here because I know what im doing
    return (
        <Berry berry={berry as unknown as PokeBerryT}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Berry.Detail name="name" />
                    </CardTitle>
                    <CardDescription>
                        One of the berries of the {properFirmnessName} firmness
                        category.
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
