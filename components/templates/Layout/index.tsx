import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <main className="pt-20 md:pt-32">{children}</main>
  </>
);

Layout.defaultProps = {
};

export default Layout;
