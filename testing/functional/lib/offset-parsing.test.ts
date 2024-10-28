import { describe, it, expect } from "vitest";
import { getOffsetParam } from "@/lib/offset-parsing";

describe("getOffsetParam", () => {
    it("should return the offset queryParam from a url", () => {
        const url = "http://example.com?offset=10";
        const expected = 10;
        expect(getOffsetParam(url)).toEqual(expected);
    });
    it("should return undefined if no offset provided", () => {
        const url = "http://example.com";
        expect(getOffsetParam(url)).toBeUndefined();
    });
    it("should return undefined if the offset is not a valid number", () => {
        const url = "http://example.com?offset=io";
        expect(getOffsetParam(url)).toBeUndefined();
    });
});
