import { describe, expect, test } from "vitest";
import { pokemonGithubSpriteZ } from "@/features/pokemon/types";

describe("pokemonGithubSpriteZ", () => {
    test("should match a githubusercontent url of a png", () => {
        const input =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png";
        const result = pokemonGithubSpriteZ.parse(input);
        expect(result).toEqual(input);
    });
    test("should match a githubusercontent url of a svg", () => {
        const input =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
        const result = pokemonGithubSpriteZ.parse(input);
        expect(result).toBe(input);
    });
    test("should match a null", () => {
        const input = null;
        const result = pokemonGithubSpriteZ.parse(input);
        expect(result).toBeNull();
    });
});
