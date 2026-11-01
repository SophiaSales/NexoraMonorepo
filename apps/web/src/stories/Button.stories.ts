import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from '@sophiasales/nexora-button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'PrimaryButton',
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', children: 'Action' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', size: 'md', children: 'Action' },
};

export const Purple: Story = {
  args: { variant: 'primary', color: 'purple', children: 'Action' },
};

export const Blue: Story = {
  args: { variant: 'primary', color: 'blue', children: 'Action' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Action' },
};
