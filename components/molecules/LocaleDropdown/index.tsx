import { ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

export interface LocaleProps {
  label: string;
  value: string;
}

export interface LocaleDropdownProps {
  children?: ReactNode;
  selectedValue: LocaleProps;
  options: LocaleProps[];
  onChange: (newValue: LocaleProps) => void;
}

const LocaleDropdown: React.FC<LocaleDropdownProps> = ({ options, onChange, selectedValue }) => (
  <Listbox value={selectedValue} onChange={onChange}>
    {({ open }) => (
      <div className="relative inline-flex items-center font-medium text-sm">
        <Listbox.Button className="pl-2 px-5 min-h-[22px] bg-white border border-nova-light-gray relative text-nova-light-gray font-medium">
          {selectedValue.label}
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[6px]">
            <FaChevronDown className={`-mt-0.5${open ? ' rotate-180' : ''}`} />
          </span>
        </Listbox.Button>
        <Listbox.Options className="text-nova-light-gray w-auto absolute top-full z-10 rounded border border-gray-500 mt-0.5 bg-white">
          {options.map((option, optionIdx) => (
            <Listbox.Option
              key={`${optionIdx.toString()}`}
              value={option}
              className={`text-center min-h-[22px] min-w-[48px] hover:text-nova-dark-blue cursor-pointer${selectedValue.value === option.value ? ' font-semibold text-nova-dark-blue' : ''}`}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    )}
  </Listbox>
);

LocaleDropdown.defaultProps = {
};

export default LocaleDropdown;
