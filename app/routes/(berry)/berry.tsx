import { getInfinteBerriesQueryOptions } from "@/features/poke-berry/api/get-berries";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import BerryList from "@/features/poke-berry/components/berry-list";

export const Route = createFileRoute("/(berry)/berry")({
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureInfiniteQueryData(getInfinteBerriesQueryOptions),
    component: BerryViewer,
});

function BerryViewer() {
    return (
        <main className="h-screen w-screen">
            <div className="flex flex-row">
                <div className="h-full max-w-fit">
                    <BerryList className="h-screen" />
                </div>
                <div className="ml-2 w-full">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
