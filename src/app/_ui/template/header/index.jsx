'use client';

import Logo from '@/app/_ui/molecules/logo';
import Navigation from '@/app/_ui/organisms/navigation';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
