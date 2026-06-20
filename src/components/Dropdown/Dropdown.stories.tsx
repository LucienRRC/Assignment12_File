import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: { label: 'Choose a size', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { label: 'Disabled dropdown', backgroundColor: '#2563eb', disabled: true },
};
