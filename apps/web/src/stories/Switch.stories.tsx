import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Switch } from '@sophiasales/nexora-form-controls';

const Sun = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

const Moon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);


const meta = {
    title: 'Example/Switch',
    component: Switch,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = { args: { label: 'Notificações', defaultChecked: true } };
export const Off: Story = { args: { label: 'Notificações' } };
export const Disabled: Story = { args: { label: 'Desabilitado', disabled: true } };
export const DisabledOn: Story = {
    args: { label: 'Desabilitado', disabled: true, defaultChecked: true },
};
export const Purple: Story = { args: { label: 'Roxo', color: 'purple', defaultChecked: true } };
export const Blue: Story = { args: { label: 'Azul', color: 'blue', defaultChecked: true } };
export const LightDark: Story = {
    args: { label: 'modo claro / escuro', iconOff: Sun, iconOn: Moon },
};
export const LightDarkPurple: Story = {
    args: { label: 'modo claro / escuro', color: 'purple', iconOff: Sun, iconOn: Moon },
};
export const LightDarkBlue: Story = {
    args: { label: 'modo claro / escuro', color: 'blue', iconOff: Sun, iconOn: Moon },
};
