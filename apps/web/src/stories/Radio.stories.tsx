import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Radio } from '@sophiasales/nexora-form-controls';

const meta = {
    title: 'Example/Radio',
    component: Radio,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Radio>;

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

export const Group: Story = {
    args: { label: 'Opção 1' },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio color="pink" name="plano" value="a" label="Plano A" defaultChecked />
            <Radio color="purple" name="plano" value="b" label="Plano B" />
            <Radio color="blue" name="plano" value="c" label="Plano C" />
        </div>
    ),
};
