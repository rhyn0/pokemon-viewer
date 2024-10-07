import { Image } from "lucide-react";

export default function ImagePlaceholder() {
    return (
        <div className="flex bg-slate-200 dark:bg-gray-600 w-1/3 h-1/3 items-center justify-center text-slate-600 dark:text-black">
            <Image size={64} />
        </div>
    );
}
