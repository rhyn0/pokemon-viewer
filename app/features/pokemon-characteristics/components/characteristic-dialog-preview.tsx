import {
    Dialog,
    DialogPortal,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog";
import { cn } from "@/lib/cn";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
    englishPokemonCharacteristicDescriptionZ,
    type PokeCharacteristicT,
} from "../types";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export type PokeCharacteristicDialogProps = {
    className?: string;
    onOpenChange: (isOpen: boolean) => void;
    pokeCharacteristic: PokeCharacteristicT;
};

export default function PokeCharacteristicDialog({
    className,
    onOpenChange,
    pokeCharacteristic,
}: PokeCharacteristicDialogProps) {
    const {
        descriptions: [desc],
    } = englishPokemonCharacteristicDescriptionZ.parse(pokeCharacteristic);

    return (
        <Dialog open onOpenChange={onOpenChange}>
            <DialogPortal>
                <DialogContent className={cn("", className)}>
                    <DialogHeader>
                        <DialogTitle>
                            Characteristic:{" "}
                            <span className="uppercase">
                                {desc?.description}
                            </span>
                        </DialogTitle>
                        <DialogDescription>
                            More interesting details about this characteristic -
                            like the expected highest stat.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mx-auto">
                        <p>
                            Highest Stat:{" "}
                            <span className="uppercase">
                                {pokeCharacteristic.highest_stat.name}
                            </span>
                        </p>
                    </div>
                    <Button
                        asChild
                        variant="link"
                        className="shadow-sm shadow-secondary-foreground/70 w-full text-center uppercase"
                    >
                        <Link
                            to="/pokemon/characteristic/$characteristicId"
                            params={{
                                characteristicId:
                                    pokeCharacteristic.id.toString(),
                            }}
                            replace
                        >
                            More Details
                        </Link>
                    </Button>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
