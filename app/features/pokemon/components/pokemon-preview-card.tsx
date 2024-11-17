import { TypographyP } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Link } from "@tanstack/react-router";
import React from "react";

const PokemonPreviewCard = React.forwardRef<
    HTMLButtonElement,
    { className?: string; index: number; name: string; isSelected?: boolean }
>(({ className, name, index, isSelected = false }, ref) => {
    const [wasClicked, setWasClicked] = React.useState(false);
    React.useEffect(() => {
        if (isSelected) {
            localStorage.setItem(`poke-card-${name}`, "true");
            setWasClicked(true);
        }
    }, [isSelected, name]);
    // Read initial state from localStorage
    React.useEffect(() => {
        const savedState = localStorage.getItem(`poke-card-${name}`);
        if (savedState === "true") {
            setWasClicked(true);
        }
    }, [name]);
    const handleClick = React.useCallback(() => {
        setWasClicked(true);
        localStorage.setItem(`poke-card-${name}`, "true");
    }, [name]);
    return (
        <button
            type="button"
            ref={ref}
            className={cn(
                "bg-white rounded-lg shadow-md p-4 text-center group relative overflow-hidden transition-all duration-300 cursor-pointer",
                wasClicked ? "ring-4 ring-blue-500" : "",
                className,
            )}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            <div
                className={cn(
                    "absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-300 transition-opacity duration-300",
                    wasClicked
                        ? "opacity-0 pointer-events-none"
                        : "group-hover:opacity-0",
                )}
            >
                ?
            </div>
            <div
                className={`relative z-10 transition-opacity duration-300 ${
                    wasClicked
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                }`}
            >
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={name}
                    width={96}
                    height={96}
                    className="mx-auto mb-2"
                />
                <span className="gap-2 inline-flex">
                    <TypographyP className="inline-flex font-semibold capitalize dark:text-gray-700 items-center">
                        {name}
                    </TypographyP>
                    <Button
                        asChild
                        variant="link"
                        className="dark:text-gray-600 p-0"
                    >
                        <Link
                            to="/pokemon/$pokemonId/modal"
                            mask={{
                                to: "/pokemon/$pokemonId",
                                params: { pokemonId: name },
                                search: { gameVersion: undefined },
                            }}
                            params={{
                                pokemonId: name,
                            }}
                        >
                            View
                        </Link>
                    </Button>
                </span>
            </div>
        </button>
    );
});

PokemonPreviewCard.displayName = "PokemonPreviewCard";
export default PokemonPreviewCard;
