import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
    component: Button,
    render: (args) => <Button {...args} />,
    args: {
        children: "Button Text",
    },
    argTypes: {
        variant: {
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
            ],
            control: { type: "select" },
        },
        size: {
            options: ["default", "sm", "lg", "icon"],
            control: {
                type: "select",
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {},
    argTypes: {
        variant: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
    },
};

export const Variant: Story = {
    args: {
        variant: "default",
    },
    argTypes: {
        size: {
            table: {
                disable: true,
            },
        },
    },
};

export const Size: Story = {
    args: {
        size: "default",
    },
    argTypes: {
        variant: {
            table: {
                disable: true,
            },
        },
    },
};
