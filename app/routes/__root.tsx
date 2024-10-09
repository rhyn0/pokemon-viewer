import { createRootRouteWithContext } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import type { QueryClient } from "@tanstack/react-query";
import DefaultCatchBoundary from "@/components/error-boundary";
import NotFound from "@/components/not-found";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// CSS
import "@/global.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/header";

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
            title: siteConfig.metadata.title.default,
        },
        {
            description: siteConfig.metadata.description,
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

const RouterDevtools =
    process.env.NODE_ENV === "development"
        ? React.lazy(() =>
              // Lazy load in development
              import("@tanstack/router-devtools").then((res) => ({
                  default: res.TanStackRouterDevtools,
                  // For Embedded Mode
                  // default: res.TanStackRouterDevtoolsPanel
              })),
          )
        : () => null;

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <Html>
            <Head>
                <Meta />
            </Head>
            <Body>
                <Header />
                {children}
                <ScrollRestoration />
                <ReactQueryDevtools initialIsOpen={false} />
                <React.Suspense>
                    <RouterDevtools />
                </React.Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
