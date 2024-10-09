import useBerryFirmnessInfiniteQuery from "../hooks/use-list-berry-firmness";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import type { BerryFirmnessRefT } from "../types";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export interface FirmnessGridProps {
    className?: string;
}
export default function FirmnessGrid({ className }: FirmnessGridProps) {
    const berryFirmnessInfQuery = useBerryFirmnessInfiniteQuery();

    const berryFirmnessPages =
        berryFirmnessInfQuery.data?.pages.flatMap((val) => val.results) ?? [];
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-24",
                className,
            )}
        >
            {berryFirmnessPages.map((berryFirmness) => (
                <Button
                    asChild
                    variant="link"
                    key={berryFirmness.name}
                    className="h-full w-full"
                >
                    <Link
                        to="/berry/firmness/$firmnessId"
                        params={{ firmnessId: berryFirmness.name }}
                        preload="intent"
                    >
                        <BerryFirmnessCard berryFirmness={berryFirmness} />
                    </Link>
                </Button>
            ))}
        </div>
    );
}

function BerryFirmnessCard({
    berryFirmness,
}: { berryFirmness: BerryFirmnessRefT }) {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle className="text-center uppercase">
                    {berryFirmness.name}
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
