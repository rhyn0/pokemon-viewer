"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/cn";
import { Link, type UseLinkPropsOptions } from "@tanstack/react-router";

export default function HeaderNavigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-secondary hover:bg-background">
                        Pokemon
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationLink
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    to="/pokemon"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        Pokemon
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Individual Pokémon and their details
                                    </p>
                                </NavigationLink>
                            </li>
                            <ListItem
                                to="/pokemon/pokeathlon-stat"
                                title="Pokeathlon Stats"
                            >
                                Pokeathlon Stats are different attributes of a
                                Pokémon's performance in Pokéathlons.
                            </ListItem>
                            <ListItem
                                to="/pokemon/egg-group"
                                title="Pokemon Eggs"
                            >
                                Egg Groups are categories which determine which
                                Pokémon are able to interbreed.
                            </ListItem>
                            <ListItem to="/pokemon/ability" title="Abilities">
                                Abilities provide passive effects for Pokémon in
                                battle or in the overworld.
                            </ListItem>
                            <ListItem
                                to="/pokemon/characteristic"
                                title="Characteristics"
                            >
                                Characteristics indicate which stat contains a
                                Pokémon's highest IV.
                            </ListItem>
                            <ListItem
                                to="/pokemon/growth-rate"
                                title="Growth Rate"
                            >
                                Growth rates are the speed with which Pokémon
                                gain levels through experience.
                            </ListItem>
                            <ListItem to="/pokemon/nature" title="Natures">
                                Natures influence how a Pokémon's stats grow.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-secondary hover:bg-background">
                        Poke Berry
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationLink
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    to="/berry"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        Berries
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Individual Berries and detais about them
                                    </p>
                                </NavigationLink>
                            </li>
                            <ListItem to="/berry/firmness" title="Firmness">
                                Berries can be soft or hard.
                            </ListItem>
                            <ListItem to="/berry/flavor" title="Flavor">
                                Flavors determine whether a Pokémon will benefit
                                or suffer from eating a berry based on their
                                nature.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function NavigationLink({ children, ...rest }: UseLinkPropsOptions) {
    return (
        <Link {...rest}>
            {({ isActive }) => (
                <NavigationMenuLink active={isActive}>
                    {children}
                </NavigationMenuLink>
            )}
        </Link>
    );
}

function ListItem({
    className,
    title,
    children,
    ...props
}: UseLinkPropsOptions) {
    return (
        <li>
            <NavigationLink
                className={cn(
                    "bg-secondary block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className,
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </NavigationLink>
        </li>
    );
}
