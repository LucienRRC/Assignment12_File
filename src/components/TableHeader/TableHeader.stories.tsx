import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  decorators: [(Story) => <table><Story /></table>],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: { text: 'Component', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled header', backgroundColor: '#2563eb', disabled: true },
};
