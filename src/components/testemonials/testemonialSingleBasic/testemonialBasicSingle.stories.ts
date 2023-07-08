import type { Meta, StoryObj } from "@storybook/react";
import testemonialBasicSingle from "./testemonialSingleBasic";
import { text } from "stream/consumers";

const meta: Meta<typeof testemonialBasicSingle> = {
  title: "Templates/testemonialBasicSingle",
  component: testemonialBasicSingle,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof testemonialBasicSingle>;

export const ExampleOne: Story = {
  args: {
    imgUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    text: " Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
    name: "Judith Black",
    position: "CEO of Workcation",
    bgColor: "#110909",
  },
};

export const ExampleTwo: Story = {
  args: {
    imgUrl:
      "https://wallpapers-clan.com/wp-content/uploads/2023/02/dc-batman-art-wallpaper.jpg",
    text: " As a man, I am flesh and blood, I can be ignored, I can be destroyed. But as a symbol… as a symbol I can be incorruptible. I can be everlasting.",
    name: "Batman",
    position: "Superhero",
    bgColor: "#110909",
  },
};
