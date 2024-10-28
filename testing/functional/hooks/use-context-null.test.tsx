import { renderHook } from "@testing-library/react";
import { useContextErrorIfNull } from "@/hooks/use-context-no-null";
import React from "react";
import { describe, it, expect } from "vitest";

describe("useContextErrorIfNull", () => {
    it("should return the context value if it is not null", () => {
        // Create a context with a non-null default value
        const TestContext = React.createContext<string | null>("test value");

        const { result } = renderHook(() => useContextErrorIfNull(TestContext));

        expect(result.current).toBe("test value");
    });

    it("should throw an error if the context value is null", () => {
        // Create a context with a null default value
        const TestContext = React.createContext<string | null>(null);

        expect(() =>
            renderHook(() => useContextErrorIfNull(TestContext)),
        ).toThrowError("useContextErrorIfNull: Context value is null");
    });
});
