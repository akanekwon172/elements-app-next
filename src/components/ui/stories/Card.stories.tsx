import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../card';

const meta = {
  title: 'Shadcn/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centerd' },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
