import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export interface HeaderLinkProps extends LinkProps {
  children?: ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, ...props }) => (
  <Link {...props}>
    <a className="pb-2 group relative font-medium text-nova-davys-grey transition-opacity duration-200 ease-linear hover:opacity-70">
      {children}
      <div className="hidden lg:block absolute bottom-0 h-[1.5px] bg-nova-dark-blue transition-transform ease-linear w-full origin-left duration-500 scale-x-0 group-hover:scale-x-100" />
    </a>
  </Link>
);

HeaderLink.defaultProps = {
};

export default HeaderLink;
