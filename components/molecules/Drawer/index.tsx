import { ReactNode } from 'react';
import { MdOutlineClear, MdSearch } from 'react-icons/md';
import HeaderLink, { NavigateItem } from 'components/atoms/HeaderLink';
import { SearchDropdownProps } from 'components/molecules/SearchDropdown';
import Button from 'components/atoms/Button';

export interface DrawerProps {
  children?: ReactNode;
  navigateList: NavigateItem[];
  searching: SearchDropdownProps;
  isOpen: boolean;
  toggle: (newState: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ navigateList, searching, isOpen, toggle }) => (
  <div className={`fixed top-0 left-0 w-full h-full px-5 py-6 bg-white flex flex-col gap-y-5 origin-right transition-transform duration-500 ease-linear${isOpen ? ' lg:translate-x-full' : ' translate-x-full'
    }`}>
    <div>
      <Button variant="nova-icon-blue" onClick={() => toggle(false)}><MdOutlineClear /></Button>
    </div>
    <div className="relative">
      <input {...searching} type="text" className="outline-none text-sm ring-0 border border-nova-light-gray rounded-sm py-[0.3125rem] pr-10 pl-3 text-nova-taupe-gray w-full" />
      <MdSearch className="text-xl text-nova-light-gray absolute right-[0.625rem] top-1/2 -translate-y-1/2" />
    </div>
    {navigateList.map((navigateItem, itemIdx) => <div key={`${itemIdx.toString()}`} ><HeaderLink href={navigateItem.href} variant="disclosure" subLinks={navigateItem.subLinks}>{navigateItem.label}</HeaderLink></div>)}
  </div>
);

Drawer.defaultProps = {
};

export default Drawer;
