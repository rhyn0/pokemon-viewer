import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, screen } from "@storybook/test";

import { Header } from "@/components/header";

const meta = {
    title: "Site Header",
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div className="h-40 w-screen">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ClickedHeader: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const homeButton = canvas.getAllByRole("link", {
            name: /Pokemon Browser/i,
        })[0] as HTMLAnchorElement;

        await userEvent.click(homeButton);
    },
};

export const ThemeDropdown: Story = {
    play: async ({ canvasElement }) => {
        const innerRoot = within(canvasElement);
        const htmlRoot = canvasElement.parentElement
            ?.parentElement as HTMLHtmlElement;
        // can't actually expect this as no class and light are the same
        // expect(htmlRoot.classList).toContain("light");
        const themeSwitcherDropdown = innerRoot.getAllByRole("button", {
            name: /Toggle theme/i,
        })[0] as HTMLButtonElement;
        await userEvent.click(themeSwitcherDropdown);
        const themeButton = screen.getByRole("menuitem", {
            suggest: true,
            name: /Dark/i,
        });
        await userEvent.click(themeButton);
        expect(htmlRoot.classList).toContain("dark");
    },
};
