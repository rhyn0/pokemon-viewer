import { Check, Sparkle, X } from "lucide-react";
import type { PokemonT } from "@/features/pokemon/types";
import { TypographySmall } from "@/components/typography/text";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TypographyH3, TypographyH4 } from "@/components/typography/headings";
import PokemonVersionSpecific from "@/features/pokemon/components/specific-game-info-selector";

export type PokemonDetailCardProps = {
    pokemon: PokemonT;
};

const typeColors: Record<string, string> = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-200",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-green-400",
    rock: "bg-yellow-800",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
};

export function PokemonDetailCard({ pokemon }: PokemonDetailCardProps) {
    const mainType = pokemon.types[0]?.type.name ?? "";
    const cardBgColor = typeColors[mainType] || "bg-gray-100";

    return (
        <div className="flex justify-center">
            <motion.div
                initial={{
                    transform: "rotateY(0deg) scale(0.5)",
                    opacity: 0,
                }}
                animate={{
                    transform: "rotateY(720deg) scale(1)",
                    opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Card
                    className={`w-80 h-96 rounded-xl shadow-xl ${cardBgColor}`}
                >
                    <div className="w-full h-full">
                        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 text-white">
                            <img
                                src={pokemon.sprites.front_default as string}
                                alt={pokemon.name}
                                className="w-40 h-40 mb-4 drop-shadow-lg"
                            />
                            <h2 className="text-2xl font-bold mb-2 capitalize">
                                {pokemon.name}
                            </h2>
                            <div className="flex gap-2 mb-2">
                                {pokemon.types.map((type) => (
                                    <span
                                        key={type.type.name}
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            typeColors[type.type.name] ||
                                            "bg-gray-400"
                                        }`}
                                    >
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            <p>Height: {pokemon.height / 10}m</p>
                            <p>Weight: {pokemon.weight / 10}kg</p>
                            <p className="inline-flex gap-1">
                                <Sparkle />
                                Experience to gain:{" "}
                                <span>{pokemon.base_experience}</span>
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}

export function ExtraDetails({
    pokemon,
    route,
}: PokemonDetailCardProps & { route: string }) {
    return (
        <div className="grid place-items-center w-full">
            <TypographyH4>Abilities</TypographyH4>
            <ul>
                {pokemon.abilities.map((abil) => (
                    <li key={abil.ability.name} className="flex flex-row">
                        <span className="font-bold">{abil.ability.name}</span>
                        <TypographySmall>
                            Ability Slot: {abil.slot}
                        </TypographySmall>
                        <TypographySmall>
                            Hidden Ability: {abil.is_hidden ? <Check /> : <X />}
                        </TypographySmall>
                    </li>
                ))}
            </ul>
            <div>
                <TypographyH3 className="text-center">Stats</TypographyH3>
                <TypographySmall className="text-center">
                    Base stats of the pokemon and the effort to raise them.
                </TypographySmall>
                <ul>
                    {pokemon.stats.map((stat) => (
                        <li
                            key={stat.stat.name}
                            className="flex flex-row justify-evenly"
                        >
                            <strong className="font-bold">
                                {stat.stat.name}
                            </strong>
                            <p className="">
                                Base amount {stat.base_stat}
                                <br />
                                Effort to improve: {stat.effort}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <PokemonVersionSpecific pokemon={pokemon} route={route}>
                <PokemonVersionSpecific.Selector />
                <PokemonVersionSpecific.HeldItems />
                <PokemonVersionSpecific.Moves />
            </PokemonVersionSpecific>
        </div>
    );
}
