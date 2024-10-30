import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Coffee, Swords } from "lucide-react";
import type { PokeNatureT } from "../types";
import { PokemonProgressBar } from "./poke-progress-bar";

export function PokemonNatureCardComponent({
    nature,
}: { nature: PokeNatureT }) {
    return (
        <div className="animate-fade-in">
            <Card className="w-full max-w-3xl mx-auto overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <CardHeader className="relative">
                    <div className="absolute top-0 left-0 w-full h-full" />
                    <CardTitle className="text-3xl font-bold capitalize relative z-10">
                        {nature.name} Nature
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 mx-10">
                    <div className="grid grid-cols-2 grid-rows-1 place-items-center">
                        <div className="space-y-2 animate-slide-left">
                            <h3 className="text-lg font-semibold flex items-center">
                                <Sparkles className="mr-2" /> Stat Changes
                            </h3>
                            <p className="text-green-600 font-medium">
                                Increased:{" "}
                                <span className="capitalize">
                                    {nature.increased_stat?.name ?? "None"}
                                </span>
                            </p>

                            <p className="text-red-600 font-medium">
                                Decreased:
                                <span className="capitalize">
                                    {nature.decreased_stat?.name ?? "None"}
                                </span>
                            </p>
                        </div>

                        <div className="space-y-2 animate-slide-right">
                            <h3 className="text-lg font-semibold flex items-center">
                                <Coffee className="mr-2" /> Flavor Preferences
                            </h3>
                            <p className="text-green-600 font-medium">
                                Likes:{" "}
                                <span className="capitalize">
                                    {nature.likes_flavor?.name ?? "None"}
                                </span>
                            </p>
                            <p className="text-red-600 font-medium">
                                Dislikes:
                                <span className="capitalize">
                                    {nature.hates_flavor?.name ?? "None"}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 animate-slide-bottom">
                        <h3 className="text-lg font-semibold flex items-center">
                            <Swords className="mr-2" /> Move Battle Style
                            Preferences
                        </h3>
                        {nature.move_battle_style_preferences.map((pref) => (
                            <div
                                key={pref.move_battle_style.name}
                                className="flex items-center space-x-2"
                            >
                                <span className="capitalize w-20">
                                    {pref.move_battle_style.name}:
                                </span>
                                <div className="flex-grow">
                                    <PokemonProgressBar
                                        value={pref.high_hp_preference}
                                    />
                                </div>
                                <span>{pref.high_hp_preference}HP</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 animate-slide-bottom">
                        <h3 className="text-lg font-semibold flex items-center">
                            <Zap className="mr-2" /> Pokéathlon Stat Changes
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {nature.pokeathlon_stat_changes.map((change) => (
                                <Badge
                                    key={change.pokeathlon_stat.name}
                                    variant={
                                        change.max_change > 0
                                            ? "default"
                                            : "destructive"
                                    }
                                    className="text-sm py-1 px-2 transition-transform hover:scale-110 active:scale-90"
                                >
                                    {change.pokeathlon_stat.name}:{" "}
                                    {change.max_change > 0 ? "+" : ""}
                                    {change.max_change}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
