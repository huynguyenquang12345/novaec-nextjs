import { Story, Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <Button variant="nova-green">Tim kiem</Button>
    </div>
    <div className="p-4 bg-nova-dark-blue">
      <Button variant="nova-border-white">Đăng ký nhận bản tin</Button>
    </div>
  </div>
);
