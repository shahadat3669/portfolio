import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { LiaGithub, LiaLinkedinIn, LiaTwitter } from 'react-icons/lia';

const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen w-full flex-col justify-center gap-2 overflow-hidden bg-[#3c3c3c] p-4 dark:bg-[#333232]"
      id="hero">
      <div className="container m-auto flex flex-row gap-4 px-4">
        <div className="flex w-full flex-col gap-4">
          <h1 className="flex flex-col gap-4 font-josefin-sense text-xl font-bold leading-[1.7] tracking-[-0.2px] text-white">
            Hello, I&#39;m{' '}
            <span className="mb-0 text-6xl leading-[1.1]">
              <span className=" text-[#ea4343]">Shahadat</span> Hosssain
            </span>
          </h1>
          <h2 className="break-words font-josefin-sense font-normal leading-[1.7] text-[#7d7789]">
            <span className="text-xl font-bold tracking-[-.2px] text-white">
              Creative <span className="text-3xl">Developer</span>
            </span>
          </h2>
          <div className="flex gap-4 font-josefin-sense text-base">
            <a
              className="flex w-fit items-center justify-center gap-2 rounded-md border-2 border-[#ea4343] bg-[#ea4343] px-8 py-2 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-white dark:hover:text-white"
              href="#contact">
              Say Hello <HiOutlineMail aria-hidden />
            </a>

            <Link
              href="#about"
              className="relative right-0 p-2 font-josefin-sense font-bold leading-[1.7] text-white after:absolute after:bottom-0 after:right-0 after:mb-2 after:h-[1px] after:w-0 after:bg-white after:transition-[width] after:duration-300 after:content-['']  hover:after:left-0  hover:after:right-auto hover:after:w-full">
              About Me
            </Link>
          </div>
          <Link href="#about" className="mt-8">
            <svg viewBox="0 0 58 88" fill="none" className="w-4" xmlns="http://www.w3.org/2000/svg">
              <g id="mouse">
                <path
                  id="outer"
                  d="M29 88C45 88 58 75 58 59V29C58 13 45 0 29 0C13 0 0 13 0 29V59C0 75 13 88 29 88ZM4 29C4 15.2 15.2 4 29 4C42.8 4 54 15.2 54 29V59C54 72.8 42.8 84 29 84C15.2 84 4 72.8 4 59V29Z"
                  fill="white"
                />
                <path
                  id="wheel"
                  d="M29 42C30.1 42 31 41.1 31 40V24C31 22.9 30.1 22 29 22C27.9 22 27 22.9 27 24V40C27 41.1 27.9 42 29 42Z"
                  fill="white"
                  className="animate-[scroll_1s_ease-in-out_infinite]"
                />
              </g>
            </svg>
            <span className="sr-only">Scroll</span>
          </Link>
        </div>
      </div>
      <ul className="left-4 flex gap-2 lg:absolute lg:flex-col">
        <li className="flex">
          <Link
            className="text-white transition-colors duration-300 hover:text-[#ea4343]"
            href="https://www.linkedin.com/in/shahadat-cseng"
            target="_blank">
            <LiaLinkedinIn />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>
        <li className="flex">
          <Link
            className="text-white transition-colors duration-300 hover:text-[#ea4343]"
            href="https://github.com/shahadat3669"
            target="_blank">
            <LiaGithub />
            <span className="sr-only">Github</span>
          </Link>
        </li>
        <li className="flex">
          <Link className="text-white transition-colors duration-300 hover:text-[#ea4343]" href="/" target="_blank">
            <LiaTwitter />
            <span className="sr-only">Twitter</span>
          </Link>
        </li>
      </ul>
      <p className="text-xs text-white">contact@dev-shahadat.com</p>
      <div className="absolute bottom-0 right-0 flex w-1/2 items-center justify-center">
        <Image
          className="z-20 hidden w-fit lg:block lg:h-4/5"
          src="/images/shahadat.png"
          width={326}
          height={520}
          alt="shahadat"
        />
        <span
          className="absolute  hidden -translate-y-1/2 font-bold text-transparent lg:top-1/3 lg:block lg:text-9xl"
          style={{
            WebkitTextStroke: '2px rgba(255,255,255,.3)',
          }}>
          SHAHADAT
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
