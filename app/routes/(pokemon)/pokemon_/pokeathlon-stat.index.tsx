import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { getListPokeathlonStatQueryOptions } from "@/features/pokeathlon-stat/api/list-pokeathlon-stat";
import React from "react";
import type { PokeathlonStatRefT } from "@/features/pokeathlon-stat/types";
import PokeathlonStatDropdownPicker from "@/features/pokeathlon-stat/components/athlon-stat-dropdown";
import { TypographyH1 } from "@/components/typography/headings";
import {
    LoadingCard,
    PokeathlonDetailCard,
} from "@/features/pokeathlon-stat/components/detail-card";
import { getPokeathlonStatQueryOptions } from "@/features/pokeathlon-stat/api/get-pokeathlon-stat";

type PokeathlonSearchParamsT = {
    statName?: string;
};
const pokeathlonSearchParamsZ = z.object({
    statName: fallback(z.string(), "speed").default("speed"),
}) satisfies z.ZodType<PokeathlonSearchParamsT>;

export const Route = createFileRoute("/(pokemon)/pokemon_/pokeathlon-stat/")({
    validateSearch: zodSearchValidator(pokeathlonSearchParamsZ),
    loaderDeps: ({ search: { statName } }) => ({ statName }),
    loader: ({ context: { queryClient }, deps: { statName } }) => {
        queryClient.ensureQueryData(getListPokeathlonStatQueryOptions);
        queryClient.ensureQueryData(getPokeathlonStatQueryOptions(statName));
    },
    component: () => <PokeathlonRoutePage />,
});

function PokeathlonRoutePage() {
    const { statName } = Route.useSearch();
    const navigate = useNavigate();
    const onDropDownChange = React.useCallback(
        (name: PokeathlonStatRefT["name"]) => {
            navigate({ to: ".", search: { statName: name } });
        },
        [navigate],
    );

    return (
        <main className="mx-10 my-8 flex flex-col justify-center space-y-4">
            <TypographyH1>Pokeathlon Stats</TypographyH1>
            <div className="lg:pt-10 h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 place-items-center">
                <div>
                    <PokeathlonStatDropdownPicker
                        value={statName}
                        onValueChange={onDropDownChange}
                    />
                </div>
                <div className="lg:col-span-2 row-span-2">
                    <React.Suspense fallback={<LoadingCard />}>
                        <PokeathlonDetailCard statName={statName} />
                    </React.Suspense>
                </div>
            </div>
        </main>
    );
}
