import Footer from '@/app/_ui/template/footer';
import Header from '@/app/_ui/template/header';
import { fontVariables } from '@/styles/fonts';
import '@/styles/globals.scss';
import styles from './page.module.scss';
import Providers from './providers';

export const metadata = {
  title: 'Lucas Migliori - Full Stack Developer',
  description:
    'This is my personal website, where I share my projects and experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html id="root" lang="en" className={fontVariables}>
      <body>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
