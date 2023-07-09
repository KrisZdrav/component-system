import type { Meta, StoryObj } from '@storybook/react';


import skeleton1 from './skeleton1';

const meta: Meta<typeof skeleton1> = {
  title: 'Animations/skeleton2',
  component: skeleton1,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof skeleton1>;

export const Animation1: Story = {};