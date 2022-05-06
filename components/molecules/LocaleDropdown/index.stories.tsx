import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import LocaleDropdown, { LocaleProps } from '.';

export default {
  title: 'Components/molecules/LocaleDropdown',
  component: LocaleDropdown,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [locale, setLocale] = useState<LocaleProps>({ label: 'VN', value: 'vn' });
  return (
    <LocaleDropdown
      options={[
        { label: 'VN', value: 'vn' },
        { label: 'EN', value: 'en' }
      ]}
      selectedValue={locale}
      onChange={(newValue) => setLocale(newValue)}
    />
  );
};
