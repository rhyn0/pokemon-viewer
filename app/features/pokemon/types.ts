import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokePaginationResult,
    type PokeApiReference,
    type PokemonSpeciesRefT,
    pokemonSpeciesRefZ,
    type GenerationRefT,
    generationRefZ,
} from "@/types/api";
import {
    type PokeAbilityRefT,
    type AbilityPokemonT,
    abilityPokemonZ,
} from "@/features/pokemon-abilities/types";
import { type PokeStatRefT, pokeStatRefZ } from "@/features/nature/types";

export const endpointCollectionName = "pokemon" as const;

export type PokemonsAbilityT = Omit<AbilityPokemonT, "pokemon"> & {
    ability: PokeAbilityRefT;
};
export const pokemonsAbilityZ = abilityPokemonZ
    .omit({
        pokemon: true,
    })
    .extend({
        ability: z.object({
            name: z.string(),
            url: pokeExactEndpointZ("ability"),
        }),
    }) satisfies z.ZodType<PokemonsAbilityT>;

export type PokemonFormRefT = PokeApiReference<"pokemon-form">;
export const pokemonFormZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("pokemon-form"),
}) satisfies z.ZodType<PokemonFormRefT>;

export type PokemonVersionRefT = PokeApiReference<"version">;
export const pokemonVersionRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("version"),
}) satisfies z.ZodType<PokemonVersionRefT>;

export type PokemonGameIndexT = {
    game_index: number;
    version: PokemonVersionRefT;
};
export const pokemonGameIndexZ = z.object({
    game_index: z.number(),
    version: pokemonVersionRefZ,
}) satisfies z.ZodType<PokemonGameIndexT>;

export type PokemonItemRefT = PokeApiReference<"item">;
export const pokemonItemRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("item"),
}) satisfies z.ZodType<PokemonItemRefT>;

export type PokemonHeldItemT = {
    item: PokemonItemRefT;
    version_details: {
        rarity: number;
        version: PokemonVersionRefT;
    }[];
};
export const pokemonHeldItemZ = z.object({
    item: pokemonItemRefZ,
    version_details: z
        .object({
            rarity: z.number(),
            version: pokemonVersionRefZ,
        })
        .array(),
}) satisfies z.ZodType<PokemonHeldItemT>;

export type PokemonMoveRefT = PokeApiReference<"move">;
export const pokemonMoveRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("move"),
}) satisfies z.ZodType<PokemonMoveRefT>;

export type PokemonVersionGroupRefT = PokeApiReference<"version-group">;
export const pokemonVersionGroupRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("version-group"),
}) satisfies z.ZodType<PokemonVersionGroupRefT>;

export type PokemonMoveLearnMethodRefT = PokeApiReference<"move-learn-method">;
export const pokemonMoveLearnMethodRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("move-learn-method"),
}) satisfies z.ZodType<PokemonMoveLearnMethodRefT>;

export type PokemonVersionGroupDetailT = {
    level_learned_at: number;
    version_group: PokemonVersionGroupRefT;
    move_learn_method: PokemonMoveLearnMethodRefT;
};
export const pokemonVersionGroupDetailZ = z.object({
    level_learned_at: z.number(),
    version_group: pokemonVersionGroupRefZ,
    move_learn_method: pokemonMoveLearnMethodRefZ,
}) satisfies z.ZodType<PokemonVersionGroupDetailT>;

export type PokemonGithubSpriteT =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${string}.png`;
export const pokemonGithubSpriteZ = z.custom<PokemonGithubSpriteT>((data) => {
    const strData = z.string().url().parse(data);
    const regex =
        /https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/master\/sprits\/pokemon\/([A-Za-z\/]+)\/(\\d+)/g;
    return regex.test(strData);
});

export type PokemonStatT = {
    base_stat: number;
    effort: number;
    stat: PokeStatRefT;
};
export const pokemonStatZ = z.object({
    base_stat: z.number(),
    effort: z.number(),
    stat: pokeStatRefZ,
}) satisfies z.ZodType<PokemonStatT>;

export type PokemonTypeRefT = PokeApiReference<"type">;
export const pokemonTypeRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("type"),
}) satisfies z.ZodType<PokemonTypeRefT>;

export type PokemonTypeT = {
    slot: number;
    type: PokemonTypeRefT;
};
export const pokemonTypeZ = z.object({
    slot: z.number(),
    type: pokemonTypeRefZ,
}) satisfies z.ZodType<PokemonTypeT>;

export type PokemonT<PokeIdT extends number = number> = {
    id: PokeIdT;
    name: string;
    base_experience: number;
    height: number; //decimeters
    is_default: boolean; // Set for exactly one Pokémon used as the default for each species.
    order: number;
    weight: number; //hectograms
    abilities: PokemonsAbilityT[];
    forms: PokemonFormRefT[];
    game_indices: PokemonGameIndexT[];
    held_items: PokemonHeldItemT[];
    location_area_encounters: `${PokeExactEndpoint<"pokemon", PokeIdT>}/encounters`;
    moves: {
        move: PokemonMoveRefT;
        version_group_details: PokemonVersionGroupDetailT[];
    }[];
    species: PokemonSpeciesRefT;
    sprites: {
        back_default: PokemonGithubSpriteT | null;
        back_female: PokemonGithubSpriteT | null;
        back_shiny: PokemonGithubSpriteT | null;
        back_shiny_female: PokemonGithubSpriteT | null;
        front_default: PokemonGithubSpriteT | null;
        front_female: PokemonGithubSpriteT | null;
        front_shiny: PokemonGithubSpriteT | null;
        front_shiny_female: PokemonGithubSpriteT | null;
        other: {
            dream_world: {
                front_default: PokemonGithubSpriteT | null;
                front_female: PokemonGithubSpriteT | null;
            };
            home: {
                front_default: PokemonGithubSpriteT | null;
                front_female: PokemonGithubSpriteT | null;
                front_shiny: PokemonGithubSpriteT | null;
                front_shiny_female: PokemonGithubSpriteT | null;
            };
            "official-artwork": {
                front_default: PokemonGithubSpriteT | null;
                front_shiny: PokemonGithubSpriteT | null;
            };
            showdown: {
                back_default: PokemonGithubSpriteT | null;
                back_female: PokemonGithubSpriteT | null;
                back_shiny: PokemonGithubSpriteT | null;
                back_shiny_female: PokemonGithubSpriteT | null;
                front_default: PokemonGithubSpriteT | null;
                front_female: PokemonGithubSpriteT | null;
                front_shiny: PokemonGithubSpriteT | null;
                front_shiny_female: PokemonGithubSpriteT | null;
            };
        };
        versions: {
            "generation-i": {
                "red-blue": {
                    back_default: PokemonGithubSpriteT | null;
                    back_gray: PokemonGithubSpriteT | null;
                    back_transparent: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_gray: PokemonGithubSpriteT | null;
                    front_transparent: PokemonGithubSpriteT | null;
                };
                yellow: {
                    back_default: PokemonGithubSpriteT | null;
                    back_gray: PokemonGithubSpriteT | null;
                    back_transparent: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_gray: PokemonGithubSpriteT | null;
                    front_transparent: PokemonGithubSpriteT | null;
                };
            };
            "generation-ii": {
                crystal: {
                    back_default: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    back_shiny_transparent: PokemonGithubSpriteT | null;
                    back_transparent: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_transparent: PokemonGithubSpriteT | null;
                    front_transparent: PokemonGithubSpriteT | null;
                };
                gold: {
                    back_default: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_transparent: PokemonGithubSpriteT | null;
                };
                silver: {
                    back_default: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_transparent: PokemonGithubSpriteT | null;
                };
            };
            "generation-iii": {
                emerald: {
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                };
                "firered-leafgreen": {
                    back_default: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                };
                "ruby-sapphire": {
                    back_default: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                };
            };
            "generation-iv": {
                "diamond-pearl": {
                    back_default: PokemonGithubSpriteT | null;
                    back_female: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    back_shiny_female: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
                "heartgold-soulsilver": {
                    back_default: PokemonGithubSpriteT | null;
                    back_female: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    back_shiny_female: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
                platinum: {
                    back_default: PokemonGithubSpriteT | null;
                    back_female: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    back_shiny_female: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
            };
            "generation-v": {
                "black-white": {
                    animated: {
                        back_default: PokemonGithubSpriteT | null;
                        back_female: PokemonGithubSpriteT | null;
                        back_shiny: PokemonGithubSpriteT | null;
                        back_shiny_female: PokemonGithubSpriteT | null;
                        front_default: PokemonGithubSpriteT | null;
                        front_female: PokemonGithubSpriteT | null;
                        front_shiny: PokemonGithubSpriteT | null;
                        front_shiny_female: PokemonGithubSpriteT | null;
                    };
                    back_default: PokemonGithubSpriteT | null;
                    back_female: PokemonGithubSpriteT | null;
                    back_shiny: PokemonGithubSpriteT | null;
                    back_shiny_female: PokemonGithubSpriteT | null;
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
            };
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
                "x-y": {
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
            };
            "generation-vii": {
                icons: {
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                };
                "ultra-sun-ultra-moon": {
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                    front_shiny: PokemonGithubSpriteT | null;
                    front_shiny_female: PokemonGithubSpriteT | null;
                };
            };
            "generation-viii": {
                icons: {
                    front_default: PokemonGithubSpriteT | null;
                    front_female: PokemonGithubSpriteT | null;
                };
            };
        };
    };
    stats: PokemonStatT[];
    types: PokemonTypeT[];
    past_types: {
        generation: GenerationRefT;
        types: PokemonTypeT[];
    };
};
export type PokemonRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
    name: string;
};
export type PokemonListT = PokePaginationResult<
    PokemonRefT,
    typeof endpointCollectionName
>;

export const locationAreaEncounterZ =
    z.custom<`${PokeExactEndpoint<"pokemon", number>}/encounters`>((data) => {
        const strData = z.string().url().parse(data);
        return pokeExactEndpointZ("pokemon")
            .parse(strData)
            .endsWith("encounters");
    });

export const pokemonZ = z.object({
    id: z.number(),
    name: z.string().min(1),
    base_experience: z.number(),
    height: z.number(), //decimeters
    is_default: z.boolean(), // Set for exactly one Pokémon used as the default for each species.
    order: z.number(),
    weight: z.number(), //hectograms
    abilities: z.array(pokemonsAbilityZ),
    forms: z.array(pokemonFormZ),
    game_indices: z.array(pokemonGameIndexZ),
    held_items: z.array(pokemonHeldItemZ),
    location_area_encounters: locationAreaEncounterZ,
    moves: z.array(
        z.object({
            move: pokemonMoveRefZ,
            version_group_details: z.array(pokemonVersionGroupDetailZ),
        }),
    ),
    species: pokemonSpeciesRefZ,
    sprites: z.object({
        back_default: pokemonGithubSpriteZ.nullable(),
        back_female: pokemonGithubSpriteZ.nullable(),
        back_shiny: pokemonGithubSpriteZ.nullable(),
        back_shiny_female: pokemonGithubSpriteZ.nullable(),
        front_default: pokemonGithubSpriteZ.nullable(),
        front_female: pokemonGithubSpriteZ.nullable(),
        front_shiny: pokemonGithubSpriteZ.nullable(),
        front_shiny_female: pokemonGithubSpriteZ.nullable(),
        other: z.object({
            dream_world: z.object({
                front_default: pokemonGithubSpriteZ.nullable(),
                front_female: pokemonGithubSpriteZ.nullable(),
            }),
            home: z.object({
                front_default: pokemonGithubSpriteZ.nullable(),
                front_female: pokemonGithubSpriteZ.nullable(),
                front_shiny: pokemonGithubSpriteZ.nullable(),
                front_shiny_female: pokemonGithubSpriteZ.nullable(),
            }),
            "official-artwork": z.object({
                front_default: pokemonGithubSpriteZ.nullable(),
                front_shiny: pokemonGithubSpriteZ.nullable(),
            }),
            showdown: z.object({
                back_default: pokemonGithubSpriteZ.nullable(),
                back_female: pokemonGithubSpriteZ.nullable(),
                back_shiny: pokemonGithubSpriteZ.nullable(),
                back_shiny_female: pokemonGithubSpriteZ.nullable(),
                front_default: pokemonGithubSpriteZ.nullable(),
                front_female: pokemonGithubSpriteZ.nullable(),
                front_shiny: pokemonGithubSpriteZ.nullable(),
                front_shiny_female: pokemonGithubSpriteZ.nullable(),
            }),
        }),
        versions: z.object({
            "generation-i": z.object({
                "red-blue": z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_gray: pokemonGithubSpriteZ.nullable(),
                    back_transparent: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_gray: pokemonGithubSpriteZ.nullable(),
                    front_transparent: pokemonGithubSpriteZ.nullable(),
                }),
                yellow: z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_gray: pokemonGithubSpriteZ.nullable(),
                    back_transparent: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_gray: pokemonGithubSpriteZ.nullable(),
                    front_transparent: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-ii": z.object({
                crystal: z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    back_shiny_transparent: pokemonGithubSpriteZ.nullable(),
                    back_transparent: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_transparent: pokemonGithubSpriteZ.nullable(),
                    front_transparent: pokemonGithubSpriteZ.nullable(),
                }),
                gold: z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_transparent: pokemonGithubSpriteZ.nullable(),
                }),
                silver: z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_transparent: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-iii": z.object({
                emerald: z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                }),
                "firered-leafgreen": z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                }),
                "ruby-sapphire": z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-iv": z.object({
                "diamond-pearl": z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_female: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    back_shiny_female: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
                "heartgold-soulsilver": z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_female: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    back_shiny_female: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
                platinum: z.object({
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_female: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    back_shiny_female: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-v": z.object({
                "black-white": z.object({
                    animated: z.object({
                        back_default: pokemonGithubSpriteZ.nullable(),
                        back_female: pokemonGithubSpriteZ.nullable(),
                        back_shiny: pokemonGithubSpriteZ.nullable(),
                        back_shiny_female: pokemonGithubSpriteZ.nullable(),
                        front_default: pokemonGithubSpriteZ.nullable(),
                        front_female: pokemonGithubSpriteZ.nullable(),
                        front_shiny: pokemonGithubSpriteZ.nullable(),
                        front_shiny_female: pokemonGithubSpriteZ.nullable(),
                    }),
                    back_default: pokemonGithubSpriteZ.nullable(),
                    back_female: pokemonGithubSpriteZ.nullable(),
                    back_shiny: pokemonGithubSpriteZ.nullable(),
                    back_shiny_female: pokemonGithubSpriteZ.nullable(),
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-vi": z.object({
                "omegaruby-alphasapphire": z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
                "x-y": z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-vii": z.object({
                icons: z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                }),
                "ultra-sun-ultra-moon": z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                    front_shiny: pokemonGithubSpriteZ.nullable(),
                    front_shiny_female: pokemonGithubSpriteZ.nullable(),
                }),
            }),
            "generation-viii": z.object({
                icons: z.object({
                    front_default: pokemonGithubSpriteZ.nullable(),
                    front_female: pokemonGithubSpriteZ.nullable(),
                }),
            }),
        }),
    }),
    stats: z.array(pokemonStatZ),
    types: z.array(pokemonTypeZ),
    past_types: z.object({
        generation: generationRefZ,
        types: z.array(pokemonTypeZ),
    }),
}) satisfies z.ZodType<PokemonT>;

export const pokemonRefZ = z.object({
    name: z.string().min(1),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokemonRefT>;

export const pokemonListZ = pokePaginationResultZ(
    pokemonRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokemonListT>;
