import button from "./button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof button> = {
  title: "Elements/button",
  component: button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["prime", "sec", "icon", "outlined"],
      control: "radio",
    },
    // bgColor: {
    //   options: ["tgPrimary", "thPrimary", "tcPrimary", "tlPrimary"],
    //   control: "select",
    // },
  },
};

export default meta;

type Story = StoryObj<typeof button>;

export const prime: Story = {
  args: {
    children: "prime button",
    url: "/about-us",
    variant: "prime",
  },
};

export const sec: Story = {
  args: {
    children: "sec button",
    url: "/about-us",
    variant: "sec",
  },
};
