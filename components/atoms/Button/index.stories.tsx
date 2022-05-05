import { Story, Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Button />
);
