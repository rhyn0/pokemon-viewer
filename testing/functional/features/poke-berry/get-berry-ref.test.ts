import { describe, expect, it } from "vitest";
import { extractGroup, extractId } from "@/features/poke-berry";

describe("extractGroup", () => {
    it("should extract the endpoint collection name from a poke API endpoint", () => {
        const url = "https://pokeapi.co/api/v2/growth-rate/1";
        const expected = "growth-rate";
        expect(extractGroup(url)).toEqual(expected);
    });
    it("should throw an error if invalid url", () => {
        const url = "https://pokeapi.co/api/v2//1";
        expect(() => extractGroup(url)).toThrowError("Invalid URL format");
    });
});

describe("extractId", () => {
    it("should extract the id of the entity from a poke API endpoint URL", () => {
        const url = "https://pokeapi.co/api/v2/growth-rate/1";
        const expected = "1";
        expect(extractId(url)).toEqual(expected);
    });
    it("should throw an error if invalid url", () => {
        const url = "https://pokeapi.co/api/v2/growth-rate/";
        expect(() => extractId(url)).toThrowError("Invalid URL format");
    });
});
