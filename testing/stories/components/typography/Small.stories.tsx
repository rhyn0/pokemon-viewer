import type { Meta, StoryObj } from "@storybook/react";
import BlockMeta from "./Blockquote.stories";
import { TypographySmall } from "@/components/typography/text";

const meta = {
    component: TypographySmall,
    args: {
        ...BlockMeta.args,
    },
    argTypes: {
        ...BlockMeta.argTypes,
    },
} satisfies Meta<typeof TypographySmall>;

export default meta;

type Story = StoryObj<typeof TypographySmall>;

export const Default: Story = {
    args: {},
};
