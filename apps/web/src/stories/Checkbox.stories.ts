import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from '@sophiasales/nexora-form-controls';

const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { label: 'Aceito os termos' } };
export const Checked: Story = { args: { label: 'Aceito os termos', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Desabilitado', disabled: true } };
export const DisabledChecked: Story = {
    args: { label: 'Desabilitado', disabled: true, defaultChecked: true },
};
export const Purple: Story = { args: { label: 'Roxo', color: 'purple', defaultChecked: true } };
export const Blue: Story = { args: { label: 'Azul', color: 'blue', defaultChecked: true } };