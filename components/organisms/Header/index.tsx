import Image, { ImageProps } from 'next/image';
import { ReactNode, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import LocaleDropdown, { LocaleDropdownProps } from 'components/molecules/LocaleDropdown';
import SearchDropdown, { SearchDropdownProps } from 'components/molecules/SearchDropdown';
import HeaderLink, { NavigateItem } from 'components/atoms/HeaderLink';
import Button from 'components/atoms/Button';
import Drawer from 'components/molecules/Drawer';

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
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="shadow-nova-header bg-white">
      <div className="container relative">
        <div className="pt-1 flex justify-between items-center">
          <div className="block lg:hidden">
            <Button variant="nova-icon-blue" onClick={() => setIsOpen(true)}>
              <MdOutlineMenu />
            </Button>
          </div>
          <Image alt="logo" {...logo} />
          <div className="lg:pl-6 lg:border-l border-nova-anti-flash-white flex gap-5">
            <LocaleDropdown {...locale} />
            <SearchDropdown {...searching} />
          </div>
        </div>
        <div className="hidden lg:flex border-t border-nova-anti-flash-white pt-4 justify-between items-center">
          {navigateList.map((navigateItem, itemIdx) => (
            <HeaderLink
              href={navigateItem.href}
              key={`${itemIdx.toString()}`}
              subLinks={navigateItem.subLinks}
            >
              {navigateItem.label}
            </HeaderLink>
          ))}
        </div>
      </div>
      <Drawer searching={searching} navigateList={navigateList} isOpen={isOpen} toggle={setIsOpen} />
    </header>
  );
};
Header.defaultProps = {};

export default Header;
