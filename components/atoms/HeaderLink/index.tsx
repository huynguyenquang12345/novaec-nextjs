import { ReactNode, useState } from 'react';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import Link, { LinkProps } from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export interface NavigateItem {
  href: string;
  label: string;
  subLinks?: NavigateItem[];
}

export interface HeaderLinkProps extends LinkProps {
  children?: ReactNode;
  subLinks?: NavigateItem[];
  variant?: 'popover' | 'disclosure'
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, subLinks, variant = 'popover', ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return variant === 'popover' ? (
    <Popover className="relative" onMouseLeave={() => setIsOpen(false)}>
      <Popover.Button className="pb-2 leading-none" onMouseEnter={() => setIsOpen(true)}>
        <Link {...props}>
          <a className="pb-2 group relative font-medium text-nova-davys-grey transition-opacity duration-200 ease-linear hover:opacity-70">
            {children}
            <div className="hidden lg:block absolute bottom-0 h-[1.5px] bg-nova-dark-blue transition-transform ease-linear w-full origin-left duration-500 scale-x-0 group-hover:scale-x-100" />
          </a>
        </Link>
      </Popover.Button>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {subLinks && subLinks.length > 0 && <Popover.Panel className="absolute z-10 pt-1 w-full lg:w-44" static>
          <div className="flex flex-col gap-y-4 py-4 px-5 bg-white lg:shadow-inner">
            {subLinks.map((subLink, subLinkIdx) => <Link key={`${subLinkIdx.toString()}`} href={subLink.href}>
              <a className="relative text-nova-davys-grey transition-opacity duration-200 ease-linear hover:opacity-70">
                {subLink.label}
              </a>
            </Link>)}
          </div>
        </Popover.Panel>}
      </Transition>
    </Popover >
  ) : (
    <Disclosure>
      <Disclosure.Button className="w-full flex justify-start relative pr-5" onClick={() => setIsOpen(prev => !prev)}>
        <Link {...props}>
          <a className="relative font-medium text-nova-davys-grey transition-opacity duration-200 ease-linear hover:opacity-70">
            {children}
          </a>
        </Link>
        {subLinks && subLinks.length > 0 && <FaChevronDown className={`text-nova-green text-base absolute top-1/2 right-0 -translate-y-1/2 transition-transform${isOpen ? ' rotate-180' : ''}`} />}
      </Disclosure.Button>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {subLinks && subLinks.length > 0 && <Disclosure.Panel className="flex flex-col px-4 pt-4 gap-y-4">
          {subLinks.map((subLink, subLinkIdx) => <Link key={`${subLinkIdx.toString()}`} href={subLink.href}>
            <a className="relative text-nova-davys-grey transition-opacity duration-200 ease-linear hover:opacity-70">
              {subLink.label}
            </a>
          </Link>)
          }
        </Disclosure.Panel>}
      </Transition>
    </Disclosure>
  );
};

HeaderLink.defaultProps = {
};

export default HeaderLink;
