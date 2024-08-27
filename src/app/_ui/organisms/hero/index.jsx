import Button from '@/app/_ui/atoms/button';
import Typography from '@/app/_ui/atoms/typography';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.section}>
      <Image
        src="/Profile-new.webp"
        alt="lucas profile picture"
        width={128}
        height={128}
      />

      <Typography
        variant="title"
        customStyles={{
          textAlign: 'center',
        }}
      >
        <span>I'm Lucas,</span> a full stack developer based in Brazil.
      </Typography>

      <div className={styles.btnContainer}>
        {/* <Link href="/contact"> */}
        <Button variant="outline">
          Let's talk <AiOutlineArrowRight />
        </Button>
        {/* </Link> */}
        <Link href="/projects">
          <Button>
            My projects <AiOutlineArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
