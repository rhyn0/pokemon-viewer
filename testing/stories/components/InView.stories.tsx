import type { Meta, StoryObj } from "@storybook/react";

import useInView from "@/hooks/in-view";
import { waitFor, within, expect } from "@storybook/test";

const meta = {
    title: "hooks/InView",
    component: () => {
        const { ref, inView } = useInView();
        return (
            <>
                <h1 className="text-center mx-10">
                    Is Top In View: {inView.toString()}
                </h1>
                <p>The text span 'Top' has the Ref attached.</p>
                <div className="h-10 overflow-y-scroll w-56 border-2 border-green-400 ring-offset-1">
                    <div className="h-96 flex flex-col justify-between border-2 border-red-600 w-full">
                        <span ref={ref}>Top</span>
                        <span>Bottom</span>
                    </div>
                </div>
            </>
        );
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
} satisfies Meta<typeof useInView>;

export default meta;

type Story = StoryObj<typeof useInView>;

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const heading = canvas.getByRole("heading", {
            suggest: true,
            name: /is top in view:/i,
        });
        await waitFor(() => expect(heading).toHaveTextContent("true"));
        expect(heading.textContent).toContain("true");
        const bottom = canvas.getByText(/bottom/i, {
            suggest: true,
        });

        await waitFor(() => {
            bottom.scrollIntoView({ behavior: "instant" });
            expect(heading).toHaveTextContent("false");
        });

        expect(heading.textContent).toContain("false");
    },
};
