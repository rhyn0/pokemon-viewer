import { describe, test, expect } from "vitest";
import toProperCase from "@/lib/to-proper";

describe("toProperCase", () => {
    test("converts single word to proper case", () => {
        expect(toProperCase("pikachu")).toBe("Pikachu");
    });

    test("converts hyphenated words to proper case", () => {
        expect(toProperCase("pikachu-evolves")).toBe("Pikachu Evolves");
    });

    test("converts underscored words to proper case", () => {
        expect(toProperCase("pikachu_evolves")).toBe("Pikachu Evolves");
    });

    test("converts mixed hyphenated and underscored words to proper case", () => {
        expect(toProperCase("pikachu-evolves_to-raichu")).toBe(
            "Pikachu Evolves To Raichu",
        );
    });

    test("handles empty string", () => {
        expect(toProperCase("")).toBe("");
    });

    test("handles string with no hyphens or underscores", () => {
        expect(toProperCase("pikachu evolves")).toBe("Pikachu evolves");
    });

    test("handles string with multiple hyphens and underscores", () => {
        expect(
            toProperCase("pikachu-evolves_to-raichu_and-then_to-alolan_raichu"),
        ).toBe("Pikachu Evolves To Raichu And Then To Alolan Raichu");
    });
});
