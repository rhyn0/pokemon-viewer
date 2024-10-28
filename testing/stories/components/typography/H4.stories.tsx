import type { Meta, StoryObj } from "@storybook/react";
import H1Meta from "./H1.stories";
import { TypographyH4 } from "@/components/typography/headings";

const meta = {
    component: TypographyH4,
    args: {
        ...H1Meta.args,
    },
    argTypes: {
        ...H1Meta.argTypes,
    },
} satisfies Meta<typeof TypographyH4>;

export default meta;

type Story = StoryObj<typeof TypographyH4>;

export const Default: Story = {
    args: {},
};
