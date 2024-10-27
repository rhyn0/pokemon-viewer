import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@/components/ui/spinner";

const meta = {
    component: Spinner,
    args: {
        size: "md",
        variant: "primary",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
        variant: {
            options: ["light", "primary"],
            control: { type: "select" },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {},
};

export const SmallPrimary: Story = {
    args: {
        size: "sm",
        ...Default.args,
    },
    argTypes: {
        size: {
            table: {
                disable: true,
            },
        },
        variant: {
            table: {
                disable: true,
            },
        },
    },
};

export const LargePrimary: Story = {
    args: {
        size: "lg",
        ...Default.args,
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};

export const XlargePrimary: Story = {
    args: {
        size: "xl",
        ...Default.args,
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};

export const SmallLight: Story = {
    args: {
        size: "sm",
        variant: "light",
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};

export const MediumLight: Story = {
    args: {
        ...SmallLight.args,
        size: "md",
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};

export const LargeLight: Story = {
    args: {
        ...SmallLight.args,
        size: "lg",
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};

export const XlargeLight: Story = {
    args: {
        ...SmallLight.args,
        size: "xl",
    },
    argTypes: {
        ...SmallPrimary.argTypes,
    },
};
