import type {
    QueryOptions,
    DefaultError,
    InfiniteData,
    UseSuspenseInfiniteQueryOptions,
} from "@tanstack/react-query";
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
            `https:\/\/pokeapi\.co\/api\/v2\/${escapeCategory}\/(?:\\d+|\\w+)/?`,
            "g",
        ).test(val as string);
    }) satisfies z.ZodType<PokeExactEndpoint<T>>;
export interface PokePaginationResult<
    T extends object,
    SPokeType extends string,
> {
    count: number;
    next: PokeListEndpoint<SPokeType> | null;
    previous: PokeListEndpoint<SPokeType> | null;
    results: T[];
}

export const pokePaginationResultZ = <
    T extends z.ZodType,
    SPokeCategory extends string,
>(
    pokeType: T,
    pokeCategory: SPokeCategory,
): z.ZodType<PokePaginationResult<z.infer<T>, SPokeCategory>> =>
    // @ts-expect-error - god knows why TS thinks that required params are optional
    z.object({
        count: z.number(),
        next: pokeListEndpointZ(pokeCategory).nullable(),
        previous: pokeListEndpointZ(pokeCategory).nullable(),
        results: z.array(pokeType),
    });

export interface ExtraQueryOptionsT<
    TFnData,
    TQueryKey extends readonly unknown[],
> extends Omit<
        QueryOptions<TFnData, DefaultError, TFnData, TQueryKey>,
        "queryKey" | "queryFn"
    > {}

export interface ExtraInfiniteQueryOptionsT<
    TFnData,
    TQueryKey extends readonly unknown[],
    TPaginationParam = number,
> extends Omit<
        UseSuspenseInfiniteQueryOptions<
            TFnData,
            DefaultError,
            InfiniteData<TFnData>,
            TFnData,
            TQueryKey,
            TPaginationParam
        >,
        "queryKey" | "queryFn"
    > {}
export type LanguageRefT = PokeApiReference<"language">;
export const languageRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("language"),
}) satisfies z.ZodType<LanguageRefT>;
export type PokemonSpeciesRefT = {
    name: string;
    url: PokeExactEndpoint<"pokemon-species">;
};
