import { getBerryFirmnessQueryOptions } from "@/features/poke-berry-firmness/api/get-firmness";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
    Dialog,
    DialogContent,
    DialogPortal,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useBerryFirmnessQuery from "@/features/poke-berry-firmness/hooks/use-berry-firmness";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/berry/firmness/$firmnessId/modal")({
    loader: ({ context: { queryClient }, params: { firmnessId } }) =>
        queryClient.ensureQueryData(getBerryFirmnessQueryOptions(firmnessId)),
    component: () => <BerryFirmnessModal />,
});

function BerryFirmnessModal() {
    const { firmnessId } = Route.useParams();
    const berryFirmnessQuery = useBerryFirmnessQuery({ firmnessId });
    const navigate = useNavigate();
    return (
        <Dialog
            open
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    navigate({ to: "/berry/firmness" });
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
                                        to="/berry/firmness/$firmnessId"
                                        params={{ firmnessId }}
                                    >
                                        Berries of this firmness?
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
