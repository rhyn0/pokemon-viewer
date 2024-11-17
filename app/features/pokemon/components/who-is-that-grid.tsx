"use client";

import useInView from "@/hooks/in-view";
import React from "react";
import usePokemonListQuery from "@/features/pokemon/hooks/use-list-pokemon";
import PokemonPreviewCard from "@/features/pokemon/components/pokemon-preview-card";

export default function PokemonGrid() {
    const { ref: inViewRef, inView } = useInView<HTMLSpanElement>();
    const listPokemonInfiniteQuery = usePokemonListQuery();
    const pokemonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
    const [selectedPokemon, setSelectedPokemon] = React.useState<number | null>(
        null,
    );
    React.useEffect(() => {
        if (inView && listPokemonInfiniteQuery.hasNextPage) {
            listPokemonInfiniteQuery.fetchNextPage();
        }
    }, [inView, listPokemonInfiniteQuery]);
    const handleRandomPokemon = React.useCallback(() => {
        const randomIndex = Math.floor(
            Math.random() * pokemonRefs.current.length,
        );
        setSelectedPokemon(randomIndex);
        pokemonRefs.current[randomIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }, []);
    const pokemon = listPokemonInfiniteQuery.data.pages.flatMap(
        (page) => page.results,
    );

    return (
        <div>
            <div className="flex justify-center mb-6">
                <RandomPokemonButton onClick={handleRandomPokemon} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {pokemon.map((poke, index) => (
                    <PokemonPreviewCard
                        key={poke.name}
                        name={poke.name}
                        index={index}
                        isSelected={selectedPokemon === index}
                        ref={(el) => {
                            pokemonRefs.current[index] = el;
                        }}
                    />
                ))}
                <span ref={inViewRef} aria-label="Bottom of Pokemon Grid" />
            </div>
            {listPokemonInfiniteQuery.isFetching && (
                <p className="text-center mt-4">Loading more Pokémon...</p>
            )}
        </div>
    );
}

export function RandomPokemonButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative w-24 h-24 bg-white rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform hover:scale-105 shadow-lg"
            aria-label="Select random Pokémon"
        >
            <div className="absolute inset-0 bg-red-600 rounded-t-full" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800" />
            </div>
            <span className="sr-only">
                Pokéball - Click to select a random Pokémon
            </span>
        </button>
    );
}
