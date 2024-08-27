import Logo from '@/app/_ui/molecules/logo';
import FooterInfo from './footer-info';
import FooterPolicies from './footer-policies';
import SocialLinks from './social-links';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo customTextColor="#fff" />
      <hr />
      <FooterInfo />
      <SocialLinks />
      <hr />
      <FooterPolicies />
    </footer>
  );
}
