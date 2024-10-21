import { cn } from "@/lib/cn";
import { Image } from "lucide-react";

export type ImagePlaceholderProps = {
    className?: string;
};

export default function ImagePlaceholder({ className }: ImagePlaceholderProps) {
    return (
        <div
            className={cn(
                "flex bg-slate-200 dark:bg-gray-600 w-1/3 h-1/3 items-center justify-center text-slate-600 dark:text-black",
                className,
            )}
        >
            <Image size={64} />
        </div>
    );
}
