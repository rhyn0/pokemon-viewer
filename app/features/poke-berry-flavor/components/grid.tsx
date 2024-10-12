import useBerryFlavorInfiniteQuery from "../hooks/use-list-flavors";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { BerryFlavorRefT } from "../types";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import type React from "react";

type LinkProps = React.ComponentProps<typeof Link>;
export interface GridProps {
    className?: string;
    to: LinkProps["to"];
    mask?: (val: string | number) => LinkProps["mask"];
    paramName: string;
}
export default function FlavorGrid({
    className,
    to,
    mask,
    paramName,
}: GridProps) {
    const berryFlavorInfQuery = useBerryFlavorInfiniteQuery();

    const berryFlavorPages =
        berryFlavorInfQuery.data?.pages.flatMap((val) => val.results) ?? [];
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-24",
                className,
            )}
        >
            {berryFlavorPages.map((berryFlavor) => (
                <Button
                    asChild
                    variant="link"
                    key={berryFlavor.name}
                    className="h-full w-full"
                >
                    <Link
                        to={to}
                        params={{ [paramName]: berryFlavor.name }}
                        preload="intent"
                        mask={mask ? mask(berryFlavor.name) : undefined}
                    >
                        <SubCard berryFlavor={berryFlavor} />
                    </Link>
                </Button>
            ))}
        </div>
    );
}

function SubCard({ berryFlavor }: { berryFlavor: BerryFlavorRefT }) {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle className="text-center uppercase">
                    {berryFlavor.name}
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
