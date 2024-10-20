import ItemGrid from "@/components/item-grid";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import usePokeCharacteristicInfiniteQuery from "../hooks/use-list-characteristics";
import { usePokeCharacteristicQueries } from "../hooks/use-get-characteristic";
import {
    englishPokemonCharacteristicDescriptionZ,
    type PokeCharacteristicRefT,
} from "../types";
import { getUrlId } from "@/lib/get-url-id";

export default function CharacteristicGrid({
    className,
}: { className?: string }) {
    const charaInfQuery = usePokeCharacteristicInfiniteQuery();
    const characteristics: (PokeCharacteristicRefT & { id: string })[] =
        charaInfQuery.data?.pages.flatMap((page) =>
            page.results.map((result) => ({
                ...result,
                id: getUrlId(result.url) as string,
            })),
        ) ?? [];
    const charaDetailsQueries = usePokeCharacteristicQueries({
        idList: characteristics.map((chara) => chara.id),
    });

    return (
        <ItemGrid
            className={className}
            items={
                charaDetailsQueries.map((q) =>
                    englishPokemonCharacteristicDescriptionZ.parse(q.data),
                ) ?? []
            }
            renderItem={({ item }) => (
                <Button
                    key={item.id}
                    variant="link"
                    className="shadow-sm shadow-secondary-foreground/70 w-full text-center uppercase"
                    asChild
                >
                    <Link
                        to="/pokemon/characteristic/$characteristicId/modal"
                        params={{ characteristicId: item.id.toString() }}
                        mask={{
                            to: "/pokemon/characteristic/$characteristicId",
                            params: { characteristicId: item.id.toString() },
                        }}
                    >
                        {item.descriptions[0]?.description}
                    </Link>
                </Button>
            )}
        />
    );
}
