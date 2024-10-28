import type { Meta, StoryObj } from "@storybook/react";
import H1Meta from "./H1.stories";
import { TypographyH3 } from "@/components/typography/headings";

const meta = {
    component: TypographyH3,
    args: {
        ...H1Meta.args,
    },
    argTypes: {
        ...H1Meta.argTypes,
    },
} satisfies Meta<typeof TypographyH3>;

export default meta;

type Story = StoryObj<typeof TypographyH3>;

export const Default: Story = {
    args: {},
};
