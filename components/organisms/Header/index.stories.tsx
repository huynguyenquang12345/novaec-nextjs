import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import Header from '.';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [locale, setLocale] = useState({ label: 'VN', value: 'vn' });
  const [value, setValue] = useState<string>('');
  return (
    <Header
      logo={{ src: '/images/nova-ec.png', width: 102, height: 78, layout: 'fixed', unoptimized: true }}
      locale={{
        options: [
          { label: 'VN', value: 'vn' },
          { label: 'EN', value: 'en' }
        ],
        selectedValue: locale,
        onChange: (newValue) => setLocale(newValue)
      }}
      searching={{
        value: value,
        onChange: (e) => setValue(e.currentTarget.value),
        placeholder: "Tim kiem"
      }}
      navigateList={[
        { label: "Trang chu", href: "#" },
        { label: "Gioi thieu", href: "#" },
        { label: "Linh vuc hoat dong", href: "#" },
        { label: "Du an", href: "#" },
        { label: "Tin tuc", href: "#", subLinks: [
          { label: "Tin tuc cong ty", href: "#" },
          { label: "Tin tuc Novagroup", href: "#" },
        ] },
        { label: "Tuyen dung", href: "#" },
        { label: "Lien he", href: "#" },
      ]}
    />
  );
};
