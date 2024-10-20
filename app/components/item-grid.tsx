import { cn } from "@/lib/cn";
import type React from "react";

export interface GridProps<T> {
    className?: string;
    items: T[];
    renderItem: (args: { item: T; idx: number }) => React.ReactNode;
}
export default function ItemGrid<T>({
    className,
    items,
    renderItem,
}: GridProps<T>) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-24",
                className,
            )}
        >
            {items.map((item, idx) => renderItem({ item, idx }))}
        </div>
    );
}
