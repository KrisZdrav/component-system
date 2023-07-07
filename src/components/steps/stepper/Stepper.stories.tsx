import type { Meta, StoryObj } from "@storybook/react";

import Stepper from "./Stepper";

// import { stepperMock } from "./Stepper.mocks";

const meta: Meta<typeof Stepper> = {
  title: "Templates/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// export const InterviewProcees: Story = {
//   args: {
//     steps: stepperMock.attributes.steps,
//     title: stepperMock.attributes.title,
//     // button: stepperMock.attributes.button,
//   },
// };

export const IconsShowCase: Story = {
  args: {
    title: "Example title",
    eyebrow: "This is an eyebrow example",
    description:
      "This is just a showcase of a component. No need for further text. This is just a showcase of a component. No need for further text. This is just a showcase of a component. No need for further text.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80",
    // button: {
    //   label: "More info",
    //   url: "/careers/business-developer",
    //   variant: "outlined",
    // },
    steps: [
      {
        step: "Envelope",
        description: "envelope",
        id: 2,
        __component: "ui.step",
      },
      { step: "Thumbs", description: "thumbs", id: 2, __component: "ui.step" },
      {
        step: "Interview",
        description: "interview",
        id: 2,
        __component: "ui.step",
      },
      { step: "Check", description: "check", id: 2, __component: "ui.step" },
      {
        step: "Chip",
        description: "chip-stack",
        id: 2,
        __component: "ui.step",
      },
    ],
  },
};
