import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { text: 'Helpful interface text', size: 'medium', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled text', size: 'medium', backgroundColor: '#2563eb', disabled: true },
};
