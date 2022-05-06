import { Story, Meta } from '@storybook/react';

import HeaderLink from '.';

export default {
  title: 'Components/atoms/HeaderLink',
  component: HeaderLink,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <HeaderLink href="#">Trang chu</HeaderLink>
);
