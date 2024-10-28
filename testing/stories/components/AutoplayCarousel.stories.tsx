import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent, waitFor } from "@storybook/test";
import AutoplayCarousel from "@/components/autoplay-carousel";

const meta = {
    component: AutoplayCarousel,
    args: {
        children: (
            <>
                {Array.from({ length: 5 }).map((_, idx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Only viable key
                    <AutoplayCarousel.Item key={idx}>
                        <p data-testid={`slide-${idx}`}>
                            Text content for card {idx + 1}
                        </p>
                    </AutoplayCarousel.Item>
                ))}
            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof AutoplayCarousel>;

export default meta;

type Story = StoryObj<typeof AutoplayCarousel>;

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");
        expect(buttons).toHaveLength(2);
    },
};

export const NoLoop: Story = {
    args: {
        opts: {
            loop: false,
            align: "center",
        },
    },
};

export const NextButtonText: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button", {
            suggest: true,
            name: /next slide/i,
        });
        expect(button.tagName).toBe("BUTTON");
        await waitFor(() => expect(button).not.toBeDisabled());
        await userEvent.click(button);

        const contents = canvas.getAllByRole("paragraph", {
            suggest: true,
        });
        expect(contents[1]).toBeVisible();
        // click again, new element should be visible
        await userEvent.click(button);
        await setTimeout(() => null, 500);

        expect(contents[2]).toBeVisible();
    },
};
export const PrevButtonTest: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button", {
            suggest: true,
            name: /previous slide/i,
        });
        expect(button.tagName).toBe("BUTTON");
        await waitFor(() => expect(button).not.toBeDisabled());
        await userEvent.click(button);

        const contents = canvas.getAllByRole("paragraph", {
            suggest: true,
        });
        expect(contents[4]).toBeVisible();
        // click again, new element should be visible
        await userEvent.click(button);
        await setTimeout(() => null, 500);

        expect(contents[3]).toBeVisible();
    },
};
