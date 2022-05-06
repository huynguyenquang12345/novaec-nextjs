import { Story, Meta } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Components/templates/Layout',
  component: Layout,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Layout />
);
