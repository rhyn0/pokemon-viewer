import { getEggGroupPaginatedQueryOptions } from "@/features/poke-egg-groups/api/list-egg-groups";
import { createFileRoute } from "@tanstack/react-router";
import { zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";
import PaginatedEggGroupGrid from "@/features/poke-egg-groups/components/paginated-egg-group-grid";
import { TypographyH1 } from "@/components/typography/headings";
import {
    TypographyBlockquote,
    TypographyP,
} from "@/components/typography/text";
import BulbapediaLink from "@/components/bulbapedia-link";

const searchValidator = z.object({
    page: z.number().default(1),
});

export const Route = createFileRoute("/(pokemon)/pokemon/egg-group/")({
    loaderDeps: ({ search: { page } }) => ({ page }),
    loader: ({ context: { queryClient }, deps: { page } }) =>
        queryClient.ensureQueryData(getEggGroupPaginatedQueryOptions(page)),
    component: () => <EggGroupIndex />,
    validateSearch: zodSearchValidator(searchValidator),
});
function EggGroupIndex() {
    return (
        <main className="mx-20">
            <div className="grid justify-items-center my-8 space-y-2 grid-cols-1">
                <div>
                    <TypographyH1 className="text-center">
                        Pokémon Egg Groups
                    </TypographyH1>
                </div>
                <div className="space-y-2 w-2/3">
                    <TypographyBlockquote>
                        Egg Groups are categories which determine which Pokémon
                        are able to interbreed. Pokémon may belong to either one
                        or two Egg Groups. Check out{" "}
                        <BulbapediaLink name="Egg_Group">
                            Bulbapedia
                        </BulbapediaLink>{" "}
                        for greater detail.
                    </TypographyBlockquote>
                    <TypographyP>
                        Click on any of the Egg Group types below to see which
                        Pokémon belong to that group.
                    </TypographyP>
                </div>
            </div>
            <div className="mx-auto flex justify-center">
                <PaginatedEggGroupGrid />
            </div>
        </main>
    );
}
