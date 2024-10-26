import type { Preview, Decorator } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import {
    createMemoryHistory,
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { queryConfig } from "@/config/react-query";
import { ThemeProvider } from "@/components/theme-provider";

import "@/global.css";

// Since Tanstack Router Link component requires context hosted by a RouterProvider,
// we need to create a router instance to provide the context.
const rootRoute = createRootRoute();
const indexRoute = createRoute({
    path: "/",
    getParentRoute: () => rootRoute,
});
const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });
const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree, history: memoryHistory });
const routerWithQuery = routerWithQueryClient(
    // @ts-expect-error - testing router
    router,
    new QueryClient({
        defaultOptions: {
            ...queryConfig,
        },
    }),
);
export const withSbTanstackRouter: Decorator = (Story, context) => {
    return (
        <RouterProvider
            // @ts-expect-error - testing router
            router={routerWithQuery}
            defaultComponent={() => <Story {...context} />}
        />
    );
};

const preview: Preview = {
    parameters: {
        layout: "centered",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        (Story, args) => <>{withSbTanstackRouter(Story, args)}</>,
        // have other decorators after the router decorator
        // router decorator doesn't preserver classNames properly
        withThemeByClassName({
            themes: {
                // nameOfTheme: 'classNameForTheme',
                light: "",
                dark: "dark",
            },
            defaultTheme: "light",
        }),
        (Story) => (
            <ThemeProvider defaultTheme="light" storageKey="testing">
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
