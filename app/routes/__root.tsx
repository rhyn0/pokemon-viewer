import { createRootRouteWithContext } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import { RouterDevtools } from "@/components/devtools";
import type { QueryClient } from "@tanstack/react-query";

// CSS
import "@/global.css";
import DefaultCatchBoundary from "@/components/error-boundary";
import NotFound from "@/components/not-found";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    meta: () => [
        {
            charSet: "utf-8",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            title: "TanStack Start Starter",
        },
    ],
    component: RootComponent,
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        );
    },
    notFoundComponent: () => <NotFound />,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <Html>
            <Head>
                <Meta />
            </Head>
            <Body>
                {children}
                <ScrollRestoration />
                <React.Suspense>
                    <RouterDevtools />
                </React.Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
