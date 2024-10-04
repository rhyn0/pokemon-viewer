import React from "react";

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

export default RouterDevtools;
