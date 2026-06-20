import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  decorators: [(Story) => <table><tbody><tr><Story /></tr></tbody></table>],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: { text: 'Table cell', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled cell', backgroundColor: '#2563eb', disabled: true },
};
