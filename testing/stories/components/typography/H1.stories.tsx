import type { Meta, StoryObj } from "@storybook/react";

import { TypographyH1 } from "@/components/typography/headings";

const meta = {
    component: TypographyH1,
    args: {
        children: "This is Heading text",
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
} satisfies Meta<typeof TypographyH1>;

export default meta;

type Story = StoryObj<typeof TypographyH1>;

export const Default: Story = {
    args: {},
};
