import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavLink({ href, label, isActive, handleClick }) {
  return (
    <li
      className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}
