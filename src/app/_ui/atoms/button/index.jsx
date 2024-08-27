import { Button as ButtonNUI } from '@nextui-org/react';
import styles from './styles.module.scss';

export default function Button({
  children,
  variant = 'fill',
  customClass = '',
  ...rest
}) {
  return (
    <ButtonNUI
      className={`${styles.button} ${styles[variant]} ${customClass}`}
      {...rest}
    >
      {children}
    </ButtonNUI>
  );
}
