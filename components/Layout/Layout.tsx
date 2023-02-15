import Navbar from '../Navbar/Navbar';
import { SidebarMenu } from '../Animation/SidebarMenu';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const isMenuOpen = useTypedSelector((state) => state.modals.isMenuOpen);
  return (
    <>
      <Navbar />
      {isMenuOpen && <SidebarMenu />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
