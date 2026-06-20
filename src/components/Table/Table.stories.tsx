import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    caption: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: { caption: 'Component table', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { caption: 'Disabled table', backgroundColor: '#2563eb', disabled: true },
};
