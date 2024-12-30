import type { Meta, StoryObj } from '@storybook/react';

import CustomNavigation from './CustomNavigation';

const meta = {
  title: 'ElementsApp/CustomNavigation',
  component: CustomNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CustomNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
