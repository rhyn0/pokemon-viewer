import { getBerryFirmnessQueryOptions } from "@/features/poke-berry-firmness/api/get-firmness";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
    Dialog,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useBerryFirmnessQuery from "@/features/poke-berry-firmness/hooks/use-berry-firmness";

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
                <DialogOverlay />
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="capitalize">
                            {berryFirmnessQuery.data.name}
                        </DialogTitle>
                        <DialogDescription>
                            <div>Hello /berry/firmness/{firmnessId}/modal!</div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
