import type { Meta, StoryObj } from "@storybook/react";
import BlockMeta from "./Blockquote.stories";
import { TypographyP } from "@/components/typography/text";

const meta = {
    component: TypographyP,
    args: {
        ...BlockMeta.args,
    },
    argTypes: {
        ...BlockMeta.argTypes,
    },
} satisfies Meta<typeof TypographyP>;

export default meta;

type Story = StoryObj<typeof TypographyP>;

export const Default: Story = {
    args: {},
};
