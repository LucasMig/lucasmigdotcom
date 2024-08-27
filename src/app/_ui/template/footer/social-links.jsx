import { socialMediaInfo } from '@/app/_data/socialMediaInfo';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs';
import styles from './styles.module.scss';

const socialIconMap = {
  twitter: BsTwitterX,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
  youtube: BsYoutube,
};

export default function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {socialMediaInfo.map((socialMedia) => {
        const Icon = socialIconMap[socialMedia.name];

        return (
          <li key={socialMedia.name}>
            <Link href={socialMedia.url} target="_blank">
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
