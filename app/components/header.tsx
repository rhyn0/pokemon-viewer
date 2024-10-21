import { ThemePicker } from "@/components/theme-picker";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { Icons } from "@/icons";
import { Link } from "@tanstack/react-router";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    return (
        <header className={cn("bg-secondary align-middle h-header", className)}>
            <div className="container flex">
                <div className="flex space-x-8 md:justify-start">
                    <div className="align-middle flex">
                        <Link
                            to="/"
                            className="flex items-center space-x-2"
                            preload="intent"
                        >
                            {siteConfig.metadata.title.default}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <nav className="flex items-center space-x-2">
                        <a
                            href={siteConfig.github.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "mb-1 w-9 px-0 align-middle",
                                )}
                            >
                                <Icons.github className="size-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </a>
                        <ThemePicker />
                    </nav>
                </div>
            </div>
        </header>
    );
}
