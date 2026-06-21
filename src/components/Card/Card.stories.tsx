import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    actionLabel: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Component card',
    body: 'A flexible card for grouping related interface content.',
    actionLabel: 'View details',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled card',
    body: 'This card is visible but not available for interaction.',
    actionLabel: 'Unavailable',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};
