/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";

const router = createRouter();

// biome-ignore lint/style/noNonNullAssertion: guaranteed to exist
hydrateRoot(document.getElementById("root")!, <StartClient router={router} />);
