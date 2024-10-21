import type React from "react";
import { cn } from "@/lib/cn";

export type BulbapediaLinkProps = React.PropsWithChildren<{
    name: string;
    className?: string;
}>;
export default function BulbapediaLink({
    name,
    className,
    children,
}: BulbapediaLinkProps) {
    return (
        <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-blue-500 dark:text-blue-300", className)}
        >
            {children}
        </a>
    );
}
