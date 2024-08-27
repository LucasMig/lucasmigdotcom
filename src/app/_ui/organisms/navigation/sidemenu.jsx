import { navLinks } from '@/app/lib/constants';
import NavLink from './navlink';
import styles from './styles.module.scss';

export default function SideMenu({ isOpen, toggleMenu, pathname }) {
  return (
    <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
      {navLinks.map(({ href, label }) => (
        <NavLink
          key={label}
          href={href}
          label={label}
          isActive={pathname === href}
          handleClick={toggleMenu}
        />
      ))}
    </ul>
  );
}
