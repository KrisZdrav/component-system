import type { Meta, StoryObj } from "@storybook/react";
import heroBasic from "./heroBasic";

const meta: Meta<typeof heroBasic> = {
  title: "Templates/heroBasic",
  component: heroBasic,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof heroBasic>;

export const prime: Story = {
  args: {
    urlTitle: "Announcing our next round of funding.",
    url: "https://www.youtube.com/watch?v=y6hfaACbMWw",
    title: "Data to enrich your online business",
    description: " Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    buttons: [
      {
        children: "Try it now",
        variant: "prime",
        url: "https://nextjs.org/docs"
      },
      {
        children: "Learn more",
        variant: "outlined",
        url: "https://nextjs.org/docs"
      }
    ],
  },
};
