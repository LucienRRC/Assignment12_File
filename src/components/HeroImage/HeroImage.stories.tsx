import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/1200/600',
    title: 'UI Garden',
    subtitle: 'Reusable components grown with React and Storybook.',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageUrl: 'https://picsum.photos/1200/600',
    title: 'Disabled hero',
    subtitle: 'This hero is intentionally unavailable.',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};
