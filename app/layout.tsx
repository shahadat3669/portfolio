import './globals.css';

import type { Metadata } from 'next';
import { Josefin_Sans, Montserrat, Open_Sans } from 'next/font/google';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar';
import { cn } from '@/libs/utils';

import Providers from './provider';

const josefinSans = Josefin_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-josefin-sans' });
const openSans = Open_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-open-sans' });
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Shahadat: Software Engineer',
  description:
    "Crafting digital wonders with Ruby on Rails, React & Redux, and a sprinkle of TypeScript magic. 🧙‍♂️ Passionate about Test-Driven Development and wielding tools like Git, Github, and Netlify.🏡✨Former Code Reviewer at Microverse, now on a mission to redefine software boundaries. Let's code a brighter future together! ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="m-0 overflow-x-hidden p-0">
      <body
        className={cn(
          openSans.variable,
          josefinSans.variable,
          montserrat.variable,
          'text-[#7d7789] font-normal bg-[#f4f5fe] text-lg w-full overflow-x-hidden font-open-sans leading-[1.7] break-words relative dark:text-[#ffffff] dark:bg-[#3c3c3c]'
        )}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
