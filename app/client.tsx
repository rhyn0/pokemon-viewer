/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";
import { ThemeProvider } from "./components/theme-provider";

const router = createRouter();

hydrateRoot(
    // biome-ignore lint/style/noNonNullAssertion: guaranteed to exist
    document.getElementById("root")!,
    <ThemeProvider defaultTheme="system" storageKey="poke-theme">
        <StartClient router={router} />
    </ThemeProvider>,
);
