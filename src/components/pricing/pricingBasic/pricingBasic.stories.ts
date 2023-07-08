import type { Meta, StoryObj } from "@storybook/react";
import pricingBasic from "./pricingBasic";

const meta: Meta<typeof pricingBasic> = {
  title: "Templates/pricingBasic",
  component: pricingBasic,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof pricingBasic>;

export const ExampleOne: Story = {
  args: {
    title: "The right price for you, whoever you are",
    text: "Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid fugiat dolorum voluptatibus.",
    tiers: [
      {
        name: "Personal",
        id: "tier-personal",
        href: "#",
        priceMonthly: "$39",
        description:
          "The perfect plan if you're just getting started with our product.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Audience segmentation",
          "Advanced analytics",
          "Email support",
          "Marketing automations",
        ],
        featured: true,
      },
      {
        name: "Team",
        id: "tier-team",
        href: "#",
        priceMonthly: "$99",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "Priority support",
          "Single sign-on",
          "Enterprise integrations",
          "Custom reporting tools",
        ],
        featured: false,
      },
    ],
  },
};
