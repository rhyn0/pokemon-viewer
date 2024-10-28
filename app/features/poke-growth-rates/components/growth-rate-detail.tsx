import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Label } from "recharts";
import type { GrowthRateT } from "../types";
import React from "react";
import { TypographyH3 } from "@/components/typography/headings";
import { TypographyP } from "@/components/typography/text";
import ImagePlaceholder from "@/components/image-placeholder";
import { cn } from "@/lib/cn";

export function ExamplePokemonDisplay({
    species,
    growthRate,
    className,
}: { species: string[]; growthRate: string; className?: string }) {
    const [randomPokemon, setRandomPokemon] = React.useState<string | null>(
        null,
    );
    const chooseRandomPokemon = React.useCallback(() => {
        const chosenIdx = ~~(Math.random() * species.length);

        const choice = species[chosenIdx];
        if (choice) {
            setRandomPokemon(choice);
        }
    }, [species]);
    React.useEffect(() => {
        chooseRandomPokemon();
        const timer = setInterval(chooseRandomPokemon, 5_000);

        return () => clearTimeout(timer);
    }, [chooseRandomPokemon]);
    return (
        <div className={cn("my-8 mt-2", className)}>
            <TypographyH3 className="capitalize">{randomPokemon}</TypographyH3>
            <div className="w-fit">
                <TypographyP>
                    <span className="capitalize">{randomPokemon}</span> is one
                    Pokémon species that is of{" "}
                    <span className="capitalize">{growthRate}</span> growth
                    rate.
                </TypographyP>
                <ImagePlaceholder className="w-full aspect-auto" />
            </div>
        </div>
    );
}

const chartConfig = {
    experience: {
        label: "Experience",
        color: "#2563eb",
    },
} satisfies ChartConfig;
export function GrowthRateExperienceChart({
    levels,
}: { levels: GrowthRateT["levels"] }) {
    return (
        <ChartContainer config={chartConfig} className="min-h-48 w-5/6">
            <AreaChart accessibilityLayer data={levels}>
                <CartesianGrid />
                <XAxis
                    dataKey="level"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    interval={"preserveEnd"}
                >
                    <Label value="Pokémon Level" />
                </XAxis>
                <YAxis>
                    <Label
                        angle={-90}
                        value="Total Experience Points Needed"
                        // position="left"
                    />
                </YAxis>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                    dataKey="experience"
                    fill="var(--color-experience)"
                    stroke="#8884d8"
                />
            </AreaChart>
        </ChartContainer>
    );
}
