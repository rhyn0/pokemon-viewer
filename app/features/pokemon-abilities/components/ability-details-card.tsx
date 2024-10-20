import React from "react";
import type {
    PokeAbilityT,
    AbilityEffectT,
    AbilityFlavorTextT,
    AbilityEffectChangeT,
} from "../types";
import { useContextErrorIfNull } from "@/hooks/use-context-no-null";
import toProperCase from "@/lib/to-proper";
import { TypographyBlockquote } from "@/components/typography/text";
import { TypographyH4 } from "@/components/typography/headings";

const AbilityContext = React.createContext<PokeAbilityT | null>(null);

function useAbilityContext(): PokeAbilityT {
    return useContextErrorIfNull(AbilityContext);
}

function Ability({
    ability,
    children,
}: React.PropsWithChildren<{
    ability: PokeAbilityT;
}>) {
    return (
        <AbilityContext.Provider value={ability}>
            {children}
        </AbilityContext.Provider>
    );
}

function AbilityText({
    className,
    name: field,
    language = "en",
}: {
    className?: string;
    name: "effect_entries" | "flavor_text_entries";
    language?: "en" | string;
}) {
    const ability = useAbilityContext();
    const fieldText = ability[field];
    const textObj = fieldText.find((entry) => entry.language.name === language);
    const text =
        (textObj as AbilityFlavorTextT)?.flavor_text ||
        (textObj as AbilityEffectT)?.effect;
    return (
        <TypographyBlockquote className={className}>
            {text ?? "N/A"}
        </TypographyBlockquote>
    );
}

function AbilityChanges({
    className,
    language = "en",
}: { className?: string; language?: "en" | string }) {
    const { effect_changes } = useAbilityContext();

    const changes = effect_changes.map(
        ({ effect_entries, ...rest }) =>
            ({
                ...rest,
                effect_entries: effect_entries.filter(
                    (entry) => entry.language.name === language,
                ),
            }) as AbilityEffectChangeT,
    );

    return (
        <div className={className}>
            {changes.map(({ effect_entries, version_group }) => {
                const textObj =
                    effect_entries.length > 0 ? effect_entries[0] : undefined;
                return (
                    <span key={textObj?.effect}>
                        <TypographyH4>
                            Introduced in {toProperCase(version_group.name)}
                        </TypographyH4>
                        <TypographyBlockquote>
                            {textObj?.effect ?? "N/A"}
                        </TypographyBlockquote>
                    </span>
                );
            })}
        </div>
    );
}

type ValidPokeDetailT = Omit<
    PokeAbilityT,
    "id" | "effect_entries" | "effect_changes" | "flavor_text_entries"
>;

function AbilityDetail<T extends keyof ValidPokeDetailT>({
    name,
    render,
}: {
    name: T;
    render: (args: {
        value: ValidPokeDetailT[T];
    }) => React.ReactNode;
}) {
    const { [name]: value } = useAbilityContext();
    return render({ value });
}

Ability.Text = AbilityText;
Ability.Changes = AbilityChanges;
Ability.Detail = AbilityDetail;

export default Ability;
