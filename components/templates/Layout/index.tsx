import { ReactNode } from 'react';
import Header, { HeaderProps } from 'components/organisms/Header';

export interface LayoutProps {
  children?: ReactNode;
  headerProps: HeaderProps;
}

const Layout: React.FC<LayoutProps> = ({ children, headerProps }) => (
  <>
    <div className="fixed top-0 left-0 w-full z-50">
      <Header {...headerProps} />
    </div>
    <main className="pt-20 lg:pt-32">{children}</main>
  </>
);

Layout.defaultProps = {
};

export default Layout;
