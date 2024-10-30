import { getPokeCharacteristicQueryOptions } from "@/features/pokemon-characteristics/api/get-characteristic";
import PokeCharacteristicDialog from "@/features/pokemon-characteristics/components/characteristic-dialog-preview";
import { usePokeCharacteristicQuery } from "@/features/pokemon-characteristics/hooks/use-get-characteristic";
import { createFileRoute } from "@tanstack/react-router";

import { useNavigate } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute(
    "/(pokemon)/pokemon_/characteristic/$characteristicId_/modal",
)({
    loader: ({ context: { queryClient }, params: { characteristicId } }) =>
        queryClient.ensureQueryData(
            getPokeCharacteristicQueryOptions(characteristicId),
        ),
    component: () => <CharacteristicModal />,
});

function CharacteristicModal() {
    const { characteristicId } = Route.useParams();
    const pokeCharacteristicQuery = usePokeCharacteristicQuery({
        id: characteristicId,
    });
    const navigate = useNavigate();
    const onDialogOpenChange = React.useCallback(
        (isOpen: boolean) => {
            if (!isOpen) {
                navigate({ to: "/pokemon/characteristic" });
            }
        },
        [navigate],
    );

    return (
        <PokeCharacteristicDialog
            onOpenChange={onDialogOpenChange}
            pokeCharacteristic={pokeCharacteristicQuery.data}
        />
    );
}
