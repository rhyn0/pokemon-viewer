import { cn } from "@/lib/cn";
import { ChevronsUp } from "lucide-react";
import React from "react";

export default function ScrollToTop({ className }: { className?: string }) {
    const [isVisible, setIsVisible] = React.useState(false);

    // Toggle visibility based on scroll position
    const toggleVisibility = React.useCallback(() => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Scroll the window to the top smoothly
    const scrollToTop = React.useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [toggleVisibility]);

    return (
        isVisible && (
            <button
                type="button"
                onClick={scrollToTop}
                className={cn(
                    "fixed bottom-10 right-3 p-1 bg-blue-500 text-white text-lg rounded-md shadow-md hover:bg-blue-600 focus:outline-none z-50",
                    className,
                )}
                aria-label="Scroll to Top button"
            >
                <span className="sr-only">Scroll to top button</span>
                <ChevronsUp className="size-12" />
            </button>
        )
    );
}
