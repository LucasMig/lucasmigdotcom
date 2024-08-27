import Typography from '@/app/_ui/atoms/typography';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Logo({ customTextColor }) {
  return (
    <Link className={styles.logo} href="/">
      <Image
        src="/lucasmig-logo.webp"
        alt="Logo art"
        width={100}
        height={100}
        priority
      />
      <Typography variant="span" customStyles={{ color: customTextColor }}>
        Lucas Migliori
      </Typography>
    </Link>
  );
}
