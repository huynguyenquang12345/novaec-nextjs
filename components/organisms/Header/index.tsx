import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';
import LocaleDropdown, { LocaleDropdownProps } from 'components/molecules/LocaleDropdown';
import SearchDropdown, { SearchDropdownProps } from 'components/molecules/SearchDropdown';
import HeaderLink from 'components/atoms/HeaderLink';

export interface NavigateItem {
  href: string;
  label: string;
}

export interface HeaderProps {
  children?: ReactNode;
  logo: ImageProps;
  locale: LocaleDropdownProps;
  searching: SearchDropdownProps;
  navigateList: NavigateItem[];
}

const Header: React.FC<HeaderProps> = ({
  logo,
  locale,
  searching,
  navigateList
}) => (
  <header className="shadow-nova-header">
    <div className="container relative">
      <div className="pt-0.5 flex justify-between items-center">
        <Image alt="logo" {...logo} />
        <div className="pl-6 lg:border-l border-nova-anti-flash-white flex gap-5">
          <LocaleDropdown {...locale} />
          <SearchDropdown {...searching} />
        </div>
      </div>
      <div className="hidden lg:flex border-t border-nova-anti-flash-white pt-4 justify-between items-center">
        {navigateList.map((navigateItem, itemIdx) => (
          <HeaderLink
            href={navigateItem.href}
            key={`${itemIdx.toString()}`}
          >
            {navigateItem.label}
          </HeaderLink>
        ))}

      </div>
    </div>
  </header>
);

Header.defaultProps = {};

export default Header;
