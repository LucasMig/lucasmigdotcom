import styles from './styles.module.scss';

export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}
