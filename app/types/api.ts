import { z } from "zod";

export type PaginationProps = {
    offset?: number;
    limit?: number;
};

export type PokeListEndpoint<TPokeType extends string> =
    `https://pokeapi.co/api/v2/${TPokeType}?offset=${number}&limit=${number}`;

export type PokeExactEndpoint<TPokeType extends string> =
    `https://pokeapi.co/api/v2/${TPokeType}/${number | string}`;

export type PokeApiReference<TPokeType extends string> = {
    name: string;
    url: PokeExactEndpoint<TPokeType>;
};

export interface PokePaginationResult<
    T extends object,
    SPokeType extends string,
> {
    count: number;
    next: PokeListEndpoint<SPokeType> | null;
    previous: PokeListEndpoint<SPokeType> | null;
    results: T[];
}

export const pokeListEndpointZ = <T extends string>(
    pokeCategory: T,
): z.ZodType<PokeListEndpoint<T>> =>
    z.custom<`https://pokeapi.co/api/v2/${T}?offset=${number}&limit=${number}`>(
        (val) => {
            const escapeCategory = pokeCategory.replace(/-/, "\\-");
            return new RegExp(
                `https:\/\/pokeapi\.co\/api\/v2\/${escapeCategory}\??(offset=\\d+)?&?(limit=\\d+)?`,
                "g",
            ).test(val as string);
        },
    ) satisfies z.ZodType<PokeListEndpoint<T>>;

export const pokeExactEndpointZ = <T extends string>(
    pokeCategory: T,
): z.ZodType<PokeExactEndpoint<T>> =>
    z.custom<`https://pokeapi.co/api/v2/${T}/${number}`>((val) => {
        const escapeCategory = pokeCategory.replace(/-/, "\\-");
        return new RegExp(
            `https:\/\/pokeapi\.co\/api\/v2\/${escapeCategory}\/\\d+/?`,
            "g",
        ).test(val as string);
    }) satisfies z.ZodType<PokeExactEndpoint<T>>;
