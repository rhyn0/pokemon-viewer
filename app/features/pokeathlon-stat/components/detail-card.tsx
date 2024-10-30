import { cn } from "@/lib/cn";
import type { PokeathlonStatT } from "../types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import BulbapediaLink from "@/components/bulbapedia-link";
import { Badge } from "@/components/ui/badge";
import { usePokeathlonStatQuery } from "../hooks/use-get-pokeathlon-stat";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { TypographySmall } from "@/components/typography/text";

export type PokeathlonDetailCardProps = {
    className?: string;
    statName: PokeathlonStatT["name"];
};

export function PokeathlonDetailCard({
    className,
    statName,
}: PokeathlonDetailCardProps) {
    const { data: stat } = usePokeathlonStatQuery({ id: statName });

    return (
        <Card className={cn("min-w-[500px]", className)}>
            <CardHeader>
                <CardTitle className="capitalize">{stat.name}</CardTitle>
                <CardDescription>
                    Pokeathlon Stats are different attributes of a Pokémon's
                    performance in Pokéathlons. In Pokéathlons, competitions
                    happen on different courses; one for each of the different
                    Pokéathlon stats.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="animate-slide-left overflow-x-auto flex flex-wrap gap-2">
                    {stat.affecting_natures.increase.length > 0 ? (
                        stat.affecting_natures.increase.map((incr) => (
                            <StatChangeBadge
                                key={incr.nature.name}
                                name={incr.nature.name}
                                value={incr.max_change}
                                isIncrease
                            />
                        ))
                    ) : (
                        <TypographySmall>No stat increases.</TypographySmall>
                    )}
                    {stat.affecting_natures.decrease.length > 0 ? (
                        stat.affecting_natures.decrease.map((decr) => (
                            <StatChangeBadge
                                key={decr.nature.name}
                                name={decr.nature.name}
                                value={decr.max_change}
                            />
                        ))
                    ) : (
                        <TypographySmall>No stat decreases.</TypographySmall>
                    )}
                </div>
            </CardContent>
            <PokeathlonFooter />
        </Card>
    );
}
function PokeathlonFooter() {
    return (
        <CardFooter>
            <p>
                More detail can be found on{" "}
                <BulbapediaLink name="Pokéathlon">Bulbapedia</BulbapediaLink>.
            </p>
        </CardFooter>
    );
}

export function LoadingCard({ className }: { className?: string }) {
    return (
        <Card className={cn("min-w-[700px]", className)}>
            <CardHeader>
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-8 w-5/6" />
            </CardHeader>
            <CardContent>
                <Spinner size="md" />
            </CardContent>
            <PokeathlonFooter />
        </Card>
    );
}

function StatChangeBadge({
    className,
    value,
    name,
    isIncrease = false,
}: {
    className?: string;
    value: number;
    name: string;
    isIncrease?: boolean;
}) {
    const text = `Nature ${name}: ${isIncrease ? "+" : "-"}${value}`;
    return (
        <Badge
            variant={isIncrease ? "default" : "destructive"}
            className={cn("", className)}
        >
            {text}
        </Badge>
    );
}
