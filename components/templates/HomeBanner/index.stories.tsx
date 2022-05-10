import { Story, Meta } from '@storybook/react';
import { HomeBannerItemProps } from 'components/molecules/HomeBannerItem';
import HomeBanner from '.';

const items: HomeBannerItemProps[] = [
  {
    imgProps: { src: '/images/home-banner.jpg', unoptimized: true },
    title: "Nova E&C - Thành viên của Nova Industry",
    desc: "Nova E&C tự hào là một thành viên của Nova Industry - 1 trong 8 trụ cột chiến lược của NovaGroup, đang nỗ lực không ngừng để tạo nên những dấu ấn mạnh mẽ trên thị trường."
  },
  {
    imgProps: { src: '/images/home-banner.jpg', unoptimized: true },
    title: "Tầm nhìn",
    desc: "Trở thành Công ty xây dựng dân dụng hàng đầu tại Việt Nam, cùng NovaGroup kiến tạo nên những đô thị, điểm đến du lịch hiện đại, góp phần nâng cao chất lượng cuộc sống người Việt."
  },
  {
    imgProps: { src: '/images/home-banner.jpg', unoptimized: true },
    title: "Sứ mệnh",
    desc: "Cung cấp các giải pháp xây dựng hiệu quả toàn diện cho khách hàng, đồng thời đảm bảo chuẩn mực về tiêu chuẩn xây dựng hoàn thiện quốc tế."
  },
];

export default {
  title: 'Components/organisms/HomeBanner',
  component: HomeBanner,
  argTypes: {},
} as Meta;

export const Normal: Story = () => (
  <HomeBanner items={items} />
);
