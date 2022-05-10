import { Story, Meta } from '@storybook/react';

import HomeBannerItem from '.';

export default {
  title: 'Components/molecules/HomeBannerItem',
  component: HomeBannerItem,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <HomeBannerItem
    imgProps={{ src: '/images/home-banner.jpg', unoptimized: true }}
    activated={false}
    title="Nova E&C - Thành viên của Nova Industry"
    desc="Nova E&C tự hào là một thành viên của Nova Industry - 1 trong 8 trụ cột chiến lược của NovaGroup, đang nỗ lực không ngừng để tạo nên những dấu ấn mạnh mẽ trên thị trường."
  />
);
