import { ReactNode, FormEvent } from 'react';
import { Popover } from '@headlessui/react';
import { MdSearch } from 'react-icons/md';

export interface SearchDropdownProps {
  children?: ReactNode;
  defaultValue?: string;
  value: string;
  placeholder?: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  defaultValue,
  value,
  onChange,
  placeholder
}) => (
  <Popover className="hidden lg:inline-flex relative items-center">
    <Popover.Button className="outline-none ring-0"><MdSearch className="text-2xl text-nova-light-gray" /></Popover.Button>
    <Popover.Panel className="absolute z-10 p-4 bg-white shadow-nova-dropdown rounded-lg right-0 top-full translate-y-5">
      <div className="relative">
        <input
          type="text"
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          className="outline-none text-sm ring-0 border border-nova-light-gray rounded-sm py-[0.3125rem] pr-10 pl-3 text-nova-taupe-gray w-[21.875rem]"
        />
        <MdSearch className="text-xl text-nova-light-gray absolute right-[0.625rem] top-1/2 -translate-y-1/2" />
      </div>
    </Popover.Panel>
  </Popover>
);

SearchDropdown.defaultProps = {
};

export default SearchDropdown;
