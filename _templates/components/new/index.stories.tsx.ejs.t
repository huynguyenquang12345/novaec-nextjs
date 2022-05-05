---
to: components/<%= level %>/<%= h.toPascalCase(name) %>/index.stories.tsx
---
import { Story, Meta } from '@storybook/react';

import <%= h.toPascalCase(name) %> from '.';

export default {
  title: 'Components/<%= level %>/<%= h.toPascalCase(name) %>',
  component: <%= h.toPascalCase(name) %>,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <<%= h.toPascalCase(name) %> />
);
