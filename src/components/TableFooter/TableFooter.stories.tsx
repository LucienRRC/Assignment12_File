import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  decorators: [(Story) => <table><Story /></table>],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: { text: 'Total: 4 components', backgroundColor: '#2563eb', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled footer', backgroundColor: '#2563eb', disabled: true },
};
