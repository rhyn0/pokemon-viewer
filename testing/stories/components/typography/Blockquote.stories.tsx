import type { Meta, StoryObj } from "@storybook/react";

import { TypographyBlockquote } from "@/components/typography/text";

const meta = {
    component: TypographyBlockquote,
    args: {
        children: "This is text.",
    },
    argTypes: {
        className: {
            type: "string",
            description: "Tailwind classes to add to the component",
            control: {
                type: "text",
            },
        },
    },
} satisfies Meta<typeof TypographyBlockquote>;

export default meta;

type Story = StoryObj<typeof TypographyBlockquote>;

export const Default: Story = {
    args: {},
};
