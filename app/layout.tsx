import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shahadat: Software Engineer',
  description:
    "Crafting digital wonders with Ruby on Rails, React & Redux, and a sprinkle of TypeScript magic. 🧙‍♂️ Passionate about Test-Driven Development and wielding tools like Git, Github, and Netlify.🏡✨Former Code Reviewer at Microverse, now on a mission to redefine software boundaries. Let's code a brighter future together! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
