import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
    component: () => (
        <div>
            <Test />
        </div>
    ),
});

function Test() {
    throw new Error("Test error");
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}
