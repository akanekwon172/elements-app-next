import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./index";

const meta = {
  title: "ElementsApp/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Sample Content",
  },
};
