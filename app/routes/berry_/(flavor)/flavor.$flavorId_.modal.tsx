import { getBerryFlavorQueryOptions } from "@/features/poke-berry-flavor/api/get-flavor";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
    Dialog,
    DialogContent,
    DialogPortal,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useBerryFlavorQuery from "@/features/poke-berry-flavor/hooks/use-berry-flavor";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/berry/(flavor)/flavor/$flavorId/modal")({
    loader: ({ context: { queryClient }, params: { flavorId } }) =>
        queryClient.ensureQueryData(getBerryFlavorQueryOptions(flavorId)),
    component: () => <BerryFirmnessModal />,
});

function BerryFirmnessModal() {
    const { flavorId } = Route.useParams();
    const berryFirmnessQuery = useBerryFlavorQuery({ flavorId });
    const navigate = useNavigate();
    return (
        <Dialog
            open
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    navigate({ to: "/berry/flavor" });
                }
            }}
        >
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="capitalize">
                            {berryFirmnessQuery.data.name}
                        </DialogTitle>
                        <DialogDescription>
                            <div className="flex justify-center align-middle mx-auto">
                                <Button asChild variant="link">
                                    <Link
                                        to="/berry/flavor/$flavorId"
                                        params={{ flavorId }}
                                    >
                                        Berries of this flavor?
                                    </Link>
                                </Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
