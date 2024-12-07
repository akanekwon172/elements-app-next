import type { Meta, StoryObj } from "@storybook/react";

import Header from "./index";

const meta = {
  title: "ElementsApp/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {},
};
