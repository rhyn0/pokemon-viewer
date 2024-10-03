import { describe, it, expect } from "vitest";
import { sum } from "./math";

describe("sum", () => {
    it("should return the sum of two positive numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("should return the sum of a positive and a negative number", () => {
        expect(sum(1, -2)).toBe(-1);
    });

    it("should return the sum of two negative numbers", () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    it("should return the sum of a number and zero", () => {
        expect(sum(1, 0)).toBe(1);
    });

    it("should return zero when both numbers are zero", () => {
        expect(sum(0, 0)).toBe(0);
    });
});
