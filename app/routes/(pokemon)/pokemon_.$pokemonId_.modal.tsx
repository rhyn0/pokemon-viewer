import { getPokemonQueryOptions } from "@/features/pokemon/api/get-pokemon";
import { usePokemonQuery } from "@/features/pokemon/hooks/use-get-pokemon";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
    Dialog,
    DialogContent,
    DialogPortal,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { PokemonDetailCard } from "@/features/pokemon/components/full-detail-card";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const Route = createFileRoute("/(pokemon)/pokemon_/$pokemonId_/modal")({
    loader: ({ context: { queryClient }, params: { pokemonId } }) =>
        queryClient.ensureQueryData(getPokemonQueryOptions(pokemonId)),
    component: () => <PokemonPeekModal />,
});
function PokemonPeekModal() {
    const { pokemonId } = Route.useParams();
    const pokemonQuery = usePokemonQuery({ id: pokemonId });
    const navigate = useNavigate();

    return (
        <Dialog
            open
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    navigate({
                        to: "/pokemon",
                    });
                }
            }}
        >
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="capitalize">
                            {pokemonQuery.data.name}
                        </DialogTitle>
                        <VisuallyHidden.Root>
                            <DialogDescription>
                                Each Pokémon belongs to a specific species but
                                may take on a variant which makes it differ from
                                other Pokémon of the same species, such as base
                                stats, available abilities and typings.
                            </DialogDescription>
                        </VisuallyHidden.Root>
                    </DialogHeader>
                    <Button
                        variant="ghost"
                        onMouseDown={() =>
                            navigate({
                                to: "/pokemon/$pokemonId",
                                params: { pokemonId },
                                search: { gameVersion: undefined },
                            })
                        }
                        type="button"
                        className="absolute top-4 right-8 mt-0 py-0 px-2 h-fit w-fit hover:bg-inherit hover:text-inherit opacity-75 hover:opacity-100 transition-opacity"
                    >
                        <Maximize2 className="size-4" />
                        <span className="sr-only">Open in Full</span>
                    </Button>
                    <div className="flex justify-center align-middle mx-auto">
                        <PokemonDetailCard pokemon={pokemonQuery.data} />
                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
