import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Radio option', checked: false, backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { label: 'Disabled radio', checked: false, backgroundColor: '#2563eb', disabled: true },
};
