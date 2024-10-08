import Typography from '@/app/_ui/atoms/typography';
import styles from './styles.module.scss';

export default function FooterInfo() {
  const expYears = new Date().getFullYear() - 2021;

  return (
    <div className={styles.infoContainer}>
      <Typography
        variant="text"
        size="tiny"
        invertTextColor={true}
        customStyles={{ textAlign: 'center', color: '#cbd5e0' }}
      >
        I'm a Full Stack Developer with {expYears}+ years of experience,
        specializing in front-end and passionate about crafting exceptional user
        experiences.
      </Typography>
    </div>
  );
}
