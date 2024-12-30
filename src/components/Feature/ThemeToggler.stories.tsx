import type { Meta, StoryObj } from '@storybook/react';

import ThemeToggler from './ThemeToggler';

const meta = {
  title: 'ElementsApp/ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeToggler>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
