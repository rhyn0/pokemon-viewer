import type { Meta, StoryObj } from "@storybook/react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { within, expect } from "@storybook/test";

const meta = {
    title: "TailwindIndicator",
    component: TailwindIndicator,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
} satisfies Meta<typeof TailwindIndicator>;

export default meta;

type Story = StoryObj<typeof TailwindIndicator>;

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const indicators = canvas.getAllByText(/(?:xs|sm|md|lg|xl|2xl)/);
        const visibleIndicator = indicators.filter((el) =>
            el.checkVisibility(),
        );
        expect(visibleIndicator).toHaveLength(1);
        expect(visibleIndicator[0]).toBeVisible();
        expect(visibleIndicator[0]?.tagName).toEqual("DIV");
    },
};
