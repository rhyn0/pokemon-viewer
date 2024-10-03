import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import ErrorBoundary from "@/components/error-boundary";
import NotFound from "@/components/not-found";

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        defaultPreload: "intent",
        defaultErrorComponent: ErrorBoundary,
        defaultNotFoundComponent: () => <NotFound />,
    });

    return router;
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
