import { cn } from "@/lib/cn";
import type React from "react";

export type TypographyTextProps = React.PropsWithChildren<{
    className?: string;
}>;

export function TypographyP({ children, className }: TypographyTextProps) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    );
}

export function TypographyBlockquote({ children }: TypographyTextProps) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    );
}

export function TypographyInlineCode({ children }: TypographyTextProps) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    );
}
