import usePokeathlonStatListQuery from "../hooks/use-list-pokeathlon-stat";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/cn";
import type { PokeAthlonStatRefT } from "@/features/nature/types";

export type PokeathlonStatDropdownPickerProps = {
    className?: string;
    value: PokeAthlonStatRefT["name"];
    onValueChange: (name: PokeAthlonStatRefT["name"]) => void;
};

export default function PokeathlonStatDropdownPicker({
    className,
    value,
    onValueChange,
}: PokeathlonStatDropdownPickerProps) {
    const athlonStatQuery = usePokeathlonStatListQuery();

    const athlonRefs = athlonStatQuery.data.results.map(
        (result) => result.name,
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn(
                    "outline outline-offset-8 outline-green-300 dark:outline-red-400",
                    className,
                )}
            >
                Choose a Stat
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Pokeathlon Stats</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={value}
                    onValueChange={onValueChange}
                >
                    {athlonRefs.map((val) => (
                        <DropdownMenuRadioItem
                            value={val}
                            key={val}
                            className="capitalize"
                        >
                            {val}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
