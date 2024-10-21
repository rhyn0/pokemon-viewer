import { describe, it, expect } from "vitest";
import { getUrlId } from "../../../app/lib/get-url-id";

describe("getUrlId", () => {
    it("should extract the id from a standard PokeAPI v2 url", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/25/";
        const id = getUrlId(url);
        expect(id).toBe("25");
    });

    it("should return undefined for a url without an id", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const id = getUrlId(url);
        expect(id).toBeUndefined();
    });

    it("should extract the id from a url with a word id", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/pikachu/";
        const id = getUrlId(url);
        expect(id).toBe("pikachu");
    });

    it("should return undefined for an empty url", () => {
        const url = "";
        const id = getUrlId(url);
        expect(id).toBeUndefined();
    });

    it("should extract the id from a url without a trailing slash", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/25";
        const id = getUrlId(url);
        expect(id).toBe("25");
    });

    it("should return undefined for a malformed url", () => {
        const url = "https://pokeapi.co/api/v2/pokemon";
        const id = getUrlId(url);
        expect(id).toBeUndefined();
    });

    it("should extract the id from a url with query parameters", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/25/?foo=bar";
        const id = getUrlId(url);
        expect(id).toBe("25");
    });

    it("should extract the id from a url with a fragment", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/25/#section";
        const id = getUrlId(url);
        expect(id).toBe("25");
    });
});
