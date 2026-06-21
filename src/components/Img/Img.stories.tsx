import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/640/360',
    alt: 'Library preview',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/640/360',
    alt: 'Disabled library preview',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};
