import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  decorators: [(Story) => <table><tbody><Story /></tbody></table>],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: { text: 'Table row', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled row', backgroundColor: '#2563eb', disabled: true },
};
