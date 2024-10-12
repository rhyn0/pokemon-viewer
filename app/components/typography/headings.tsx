import { cn } from "@/lib/cn";
import type React from "react";

export type TypographyHeadingProps = React.PropsWithChildren<{
    className?: string;
}>;

export function TypographyH1({ children, className }: TypographyHeadingProps) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                className,
            )}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: TypographyHeadingProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                className,
            )}
        >
            {children}
        </h2>
    );
}
export function TypographyH3({ children }: TypographyHeadingProps) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    );
}

export function TypographyH4({ children }: TypographyHeadingProps) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    );
}
