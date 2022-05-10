import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import Drawer from '.';

export default {
  title: 'Components/molecules/Drawer',
  component: Drawer,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="overflow-x-hidden">
      <button onClick={() => setIsOpen(true)}>open</button>
      <Drawer
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
          { label: "Tin tuc", href: "#" },
          { label: "Tuyen dung", href: "#" },
          { label: "Lien he", href: "#" },
        ]}
        isOpen={isOpen}
        toggle={setIsOpen}
      />
    </div>
  );
};
