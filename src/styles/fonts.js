import { Inter, Inter_Tight } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--inter-tight',
});

const fonts = [inter, interTight];

export const fontVariables = fonts.map((font) => font.variable).join(' ');
