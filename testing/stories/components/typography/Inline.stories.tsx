import type { Meta, StoryObj } from "@storybook/react";
import BlockMeta from "./Blockquote.stories";
import { TypographyInlineCode } from "@/components/typography/text";

const meta = {
    component: TypographyInlineCode,
    args: {
        ...BlockMeta.args,
    },
    argTypes: {
        ...BlockMeta.argTypes,
    },
} satisfies Meta<typeof TypographyInlineCode>;

export default meta;

type Story = StoryObj<typeof TypographyInlineCode>;

export const Default: Story = {
    args: {},
};
