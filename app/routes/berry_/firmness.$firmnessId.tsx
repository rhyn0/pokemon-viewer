import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/berry/firmness/$firmnessId")({
    component: () => <div>Hello /berry/firmness/$firmnessId!</div>,
});
