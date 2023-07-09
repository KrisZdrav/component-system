import type { Meta, StoryObj } from '@storybook/react';


import skeleton from './skeleton';

const meta: Meta<typeof skeleton> = {
  title: 'Animations/skeleton',
  component: skeleton,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof skeleton>;

export const Animation1: Story = {};