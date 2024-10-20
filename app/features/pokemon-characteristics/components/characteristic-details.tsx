"use client";

import { Trophy, Dices } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    englishPokemonCharacteristicDescriptionZ,
    type PokeCharacteristicT,
} from "../types";
import { TypographyH3 } from "@/components/typography/headings";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const attrDescriptions = {
    possible_values:
        "The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.",
    gene_modulo: "The remainder of the highest stat/IV divided by 5.",
    highest_stat: "The stat which results in this characteristic.",
} as const;

export type CharacteristicDetailsProps = {
    characteristic: PokeCharacteristicT;
};

export function CharacteristicDetails({
    characteristic,
}: CharacteristicDetailsProps) {
    const possibleStatValues = characteristic.possible_values;
    const {
        descriptions: [desc],
    } = englishPokemonCharacteristicDescriptionZ.parse(characteristic);

    return (
        <TooltipProvider>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center p-4">
                <Card className="w-full max-w-4xl">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-center">
                            Pokémon Characteristic #{characteristic.id}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <TypographyH3 className="text-2xl font-semibold mb-4">
                                        Description
                                    </TypographyH3>
                                    <p className="text-3xl font-bold text-primary">
                                        {desc?.description}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <TypographyH3 className="text-2xl font-semibold mb-4">
                                                Gene Modulo:{" "}
                                                {characteristic.gene_modulo}
                                            </TypographyH3>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                {attrDescriptions.gene_modulo}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <div className="text-center">
                                    <div className="flex flex-row space-x-2 justify-center mb-4">
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <TypographyH3 className="text-2xl font-semibold mb-2">
                                                    Highest Stat
                                                </TypographyH3>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    {
                                                        attrDescriptions.highest_stat
                                                    }
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                        <Trophy className="ml-2 text-yellow-500" />
                                    </div>
                                    <p className="text-center text-3xl font-bold text-primary">
                                        {characteristic.highest_stat.name.toUpperCase()}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="flex flex-row space-x-2 justify-center mb-4">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <TypographyH3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
                                                Possible Values
                                            </TypographyH3>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                {
                                                    attrDescriptions.possible_values
                                                }
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Dices className="ml-2 text-primary" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {possibleStatValues.map((value) => (
                                        <Button
                                            key={value}
                                            variant="outline"
                                            className="w-full h-16 text-2xl font-bold pointer-events-none"
                                        >
                                            {value}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </TooltipProvider>
    );
}
