import Typography from '@/app/_ui/atoms/typography';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import styles from './styles.module.scss';

export default function FooterPolicies() {
  return (
    <div className={styles.policiesContainer}>
      <Typography variant="text" size="tiny" customStyles={{ color: '#fff' }}>
        © 2024 Lucas Migliori. All rights reserved.
      </Typography>
      <Link href="/about">
        <Typography variant="text" size="tiny" customStyles={{ color: '#fff' }}>
          About me
        </Typography>
        <MdOutlineArrowOutward />
      </Link>
    </div>
  );
}
