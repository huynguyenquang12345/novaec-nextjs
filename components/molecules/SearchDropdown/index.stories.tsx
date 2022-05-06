import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import SearchDropdown from '.';

export default {
  title: 'Components/molecules/SearchDropdown',
  component: SearchDropdown,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="flex justify-end">
      <SearchDropdown
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Tim kiem"
      />
    </div>
  );
};
