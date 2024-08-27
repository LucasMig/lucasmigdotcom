'use client';

import Button from '@/app/_ui/atoms/button';
import { useMainContext } from '@/app/providers';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SideMenu from './sidemenu';
import styles from './styles.module.scss';

export default function Navigation() {
  const pathname = usePathname();
  const { isSideBarOpen, toggleSideBar } = useMainContext();

  return (
    <nav className={styles.nav}>
      <Button onClick={toggleSideBar} style={{ zIndex: 2 }}>
        {isSideBarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Button>
      <SideMenu
        isOpen={isSideBarOpen}
        toggleMenu={toggleSideBar}
        pathname={pathname}
      />
    </nav>
  );
}
