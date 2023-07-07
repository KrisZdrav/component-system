import type { Meta, StoryObj } from "@storybook/react";
import statsBasic from "./statsBasic";

const meta: Meta<typeof statsBasic> = {
  title: "Templates/statsBasic",
  component: statsBasic,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof statsBasic>;

export const prime: Story = {
  args: {
    title: "Trusted by creators worldwide",
    description: "Lorem ipsum dolor sit amet consect adipisicing possimus.",
    stats: [
      { name: "Creators on the platform", value: "8,000+" },
      { name: "Flat platform fee", value: "3%" },
      { name: "Uptime guarantee", value: "99.9%" },
      { name: "Paid out to creators", value: "$70M" },
    ],
  },
};
