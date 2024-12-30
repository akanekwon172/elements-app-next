import { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '../dropdown-menu'

const meta = {
    title: 'Shadcn/dropdown-menu',
    component: DropdownMenu,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const DropdownMenuRadioGroup: Story = {
    args: {},
}
