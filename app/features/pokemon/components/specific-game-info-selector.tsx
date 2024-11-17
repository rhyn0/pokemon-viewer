// Context compound design
import React from "react";
import { useContextErrorIfNull } from "@/hooks/use-context-no-null";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { pokemonZ } from "../types";
import { TypographyH3 } from "@/components/typography/headings";
import { TypographySmall } from "@/components/typography/text";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import type { z } from "zod";
import type { PokemonT } from "../types";
import { getRouteApi } from "@tanstack/react-router";

const pokemonSelectZ = pokemonZ.pick({
    game_indices: true,
    held_items: true,
    moves: true,
});
type PokemonSelectContextT = z.infer<typeof pokemonSelectZ> & {
    selectedGameVersion: string;
};
const PokemonSelectedGameVersionContext = React.createContext<{
    value: PokemonSelectContextT;
    setValue: React.Dispatch<React.SetStateAction<PokemonSelectContextT>>;
    route: string;
} | null>(null);

function Provider({
    pokemon,
    children,
    route,
}: React.PropsWithChildren<{ pokemon: PokemonT; route: string }>) {
    // @ts-expect-error - yah im probably doing something not advisable
    const routeApi = getRouteApi();
    const searchParams = routeApi.useSearch();
    const [providedValue, setProvidedValue] =
        React.useState<PokemonSelectContextT>(() => ({
            ...pokemonSelectZ.parse(pokemon),
            // @ts-expect-error - smashing all the searchParam types together
            selectedGameVersion: searchParams.gameVersion ?? "",
        }));
    return (
        <PokemonSelectedGameVersionContext.Provider
            value={{ value: providedValue, setValue: setProvidedValue, route }}
        >
            <Accordion type="single" collapsible className="w-full">
                {children}
            </Accordion>
        </PokemonSelectedGameVersionContext.Provider>
    );
}

function Selector({ omit = [] }: { omit?: string[] }) {
    const {
        value: { game_indices, selectedGameVersion },
        setValue,
        route,
    } = useContextErrorIfNull(PokemonSelectedGameVersionContext);
    // @ts-expect-error - yah im probably doing something not advisable
    const routeApi = getRouteApi(route);
    const navigate = routeApi.useNavigate();
    const allowedOptions = React.useMemo(
        () =>
            game_indices
                .map((gi) => gi.version.name)
                .filter((val) => !omit.includes(val)),
        [omit, game_indices],
    );
    const handleVersionChange = React.useCallback(
        (version: string) => {
            navigate({ search: { gameVersion: version } });
            setValue((prev) => ({ ...prev, selectedGameVersion: version }));
        },
        [setValue, navigate],
    );
    return (
        <Select onValueChange={handleVersionChange} value={selectedGameVersion}>
            <SelectTrigger className="w-48 mb-4">
                <SelectValue placeholder="Select a version" />
            </SelectTrigger>
            <SelectContent>
                {allowedOptions.map((game) => (
                    <SelectItem key={game} value={game}>
                        {game}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

function HeldItems() {
    const {
        value: { selectedGameVersion, held_items },
    } = useContextErrorIfNull(PokemonSelectedGameVersionContext);

    const itemsForVersion = React.useMemo(
        () =>
            held_items
                .map((item) => ({
                    ...item,
                    version_details: item.version_details.filter(
                        (vd) => vd.version.name === selectedGameVersion,
                    ),
                }))
                .filter((res) => res.version_details.length > 0)
                .sort((a, b) => a.item.name.localeCompare(b.item.name)),
        [selectedGameVersion, held_items],
    );

    if (itemsForVersion.length === 0) {
        return null;
    }

    return (
        <AccordionItem value="held-items">
            <AccordionTrigger>
                <TypographyH3 className="text-center mb-2">
                    Possible Held Items
                </TypographyH3>
            </AccordionTrigger>
            <AccordionContent>
                <ul className="justify-items-center">
                    {itemsForVersion.map((item) => (
                        <li key={item.item.name} className="flex flex-row">
                            <p className="inline-flex px-8 gap-4">
                                <strong className="font-semibold">
                                    Rarity of {item.item.name}:
                                </strong>
                                {item.version_details[0]?.rarity}%
                            </p>
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
}

function Moves() {
    const {
        value: { selectedGameVersion, moves },
    } = useContextErrorIfNull(PokemonSelectedGameVersionContext);

    const movesForVersion = React.useMemo(
        () =>
            moves
                .map((move) => ({
                    ...move,
                    version_group_details: move.version_group_details.filter(
                        (vd) =>
                            vd.version_group.name.includes(selectedGameVersion),
                    ),
                }))
                .filter((move) => move.version_group_details.length > 0)
                .sort((a, b) => a.move.name.localeCompare(b.move.name)),
        [selectedGameVersion, moves],
    );

    if (selectedGameVersion.length === 0 || movesForVersion.length === 0) {
        return null;
    }

    return (
        <AccordionItem value="moves">
            <AccordionTrigger>
                <TypographyH3 className="text-center">Moves</TypographyH3>
                <TypographySmall className="text-center">
                    Moves and their learn methods and details
                </TypographySmall>
            </AccordionTrigger>
            <AccordionContent>
                <ul>
                    {movesForVersion.map((move) => (
                        <li
                            key={move.move.name}
                            className="flex flex-row justify-evenly"
                        >
                            <strong className="font-bold">
                                {move.move.name}
                            </strong>
                            <p className="">
                                Level Learned at{" "}
                                {
                                    move.version_group_details[0]
                                        ?.level_learned_at
                                }
                                <br />
                                Learn Method:{" "}
                                {
                                    move.version_group_details[0]
                                        ?.move_learn_method.name
                                }
                            </p>
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
}

Provider.Selector = Selector;
Provider.HeldItems = HeldItems;
Provider.Moves = Moves;

export default Provider;
