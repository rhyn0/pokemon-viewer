//TODO<@rhyn0>: Compound/Context Component for Berry Details

import React from "react";
import type { PokeBerryT } from "../types";
import { useContextErrorIfNull } from "@/lib/use-context-no-null";
import berryImages from "../api/berry-images";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/label";
import toProperCase from "@/lib/to-proper";

const BerryContext = React.createContext<PokeBerryT | null>(null);

function useBerryContext(): PokeBerryT {
    return useContextErrorIfNull(BerryContext);
}

function Berry({
    berry,
    children,
}: React.PropsWithChildren<{
    berry: PokeBerryT;
}>) {
    return (
        <BerryContext.Provider value={berry}>{children}</BerryContext.Provider>
    );
}

const BerryImage = React.forwardRef<
    HTMLImageElement,
    Omit<React.ComponentPropsWithoutRef<"img">, "src" | "alt" | "children">
>(({ className, ...rest }, ref) => {
    const { name } = useBerryContext();
    const src = berryImages[name as keyof typeof berryImages];
    return (
        <img {...rest} ref={ref} className={className} src={src} alt={name} />
    );
});
BerryImage.displayName = "BerryImage";

function BerryDetail({
    className,
    name,
}: {
    className?: string;
    name: Exclude<
        keyof PokeBerryT,
        "firmness" | "flavors" | "item" | "natural_gift_type"
    >;
}) {
    const { [name]: value } = useBerryContext();
    const formattedName = toProperCase(name);
    return (
        <div className={className}>
            {formattedName}: {value}
        </div>
    );
}

function BerryLinkDetail({
    className,
    name,
}: {
    className?: string;
    name: Extract<keyof PokeBerryT, "firmness" | "item" | "natural_gift_type">;
}) {
    const {
        [name]: { name: resourceName },
    } = useBerryContext();
    // const resourceGroup = extractGroup(url)
    // const resourceId = extractId(url);
    // const linkTo = `/${resourceGroup}/${flavorId}`;
    // TODO<@rhyn0>: change to link
    const formattedName = toProperCase(name);
    return (
        <Label className={cn("font-semibold", className)}>
            {formattedName}: <span>{resourceName}</span>
            <br />
        </Label>
    );
}

function BerryFlavors({ className }: { className?: string }) {
    const { flavors } = useBerryContext();
    return (
        <div className={cn("flex flex-row space-x-4", className)}>
            {flavors.map(({ flavor, potency }) => {
                // const flavorId = extractId(flavor.url);
                // const linkTo = `/berry-flavor/${flavorId}`;
                const formattedName = toProperCase(flavor.name);
                return (
                    <div key={flavor.name}>
                        <span>{formattedName}:</span>
                        {potency}
                    </div>
                );
            })}
        </div>
    );
}

Berry.Image = BerryImage;
Berry.Detail = BerryDetail;
Berry.Link = BerryLinkDetail;
Berry.Flavors = BerryFlavors;
export default Berry;
