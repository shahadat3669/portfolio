import Image from 'next/image';
import Link from 'next/link';
import { LiaGithub, LiaLinkedinIn, LiaTwitter } from 'react-icons/lia';

const Footer = () => {
  return (
    <footer className="bg-[#3c3c3c] py-24 text-white dark:bg-[#333232]">
      <div className="container relative mx-auto flex flex-col gap-16 px-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="relative max-w-xs">
            <Image width={108} height={51} className="w-full" src="/images/logo/logo-dark.svg" alt="Your Company" />
          </div>
          <div className="flex items-center gap-4 font-josefin-sense font-bold">
            Connect
            <ul className="flex gap-2">
              <li className="flex">
                <Link
                  className="rounded-full bg-white p-4 text-[#ea4343] transition-colors duration-300 hover:bg-[#ea4343] hover:text-white"
                  href="https://www.linkedin.com/in/shahadat-cseng"
                  target="_blank">
                  <LiaLinkedinIn />
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="rounded-full bg-white p-4 text-[#ea4343] transition-colors duration-300 hover:bg-[#ea4343] hover:text-white"
                  href="https://github.com/shahadat3669"
                  target="_blank">
                  <LiaGithub />
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="rounded-full bg-white p-4 text-[#ea4343] transition-colors duration-300 hover:bg-[#ea4343] hover:text-white"
                  href="/"
                  target="_blank">
                  <LiaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
