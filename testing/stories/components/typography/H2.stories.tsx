import type { Meta, StoryObj } from "@storybook/react";
import H1Meta from "./H1.stories";
import { TypographyH2 } from "@/components/typography/headings";

const meta = {
    component: TypographyH2,
    args: {
        ...H1Meta.args,
    },
    argTypes: {
        ...H1Meta.argTypes,
    },
} satisfies Meta<typeof TypographyH2>;

export default meta;

type Story = StoryObj<typeof TypographyH2>;

export const Default: Story = {
    args: {},
};
