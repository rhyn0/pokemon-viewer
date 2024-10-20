import React from "react";

export function useContextErrorIfNull<T>(context: React.Context<T | null>): T {
    const value = React.useContext(context);
    if (!value) {
        throw new Error("useContextErrorIfNull: Context value is null");
    }
    return value;
}
