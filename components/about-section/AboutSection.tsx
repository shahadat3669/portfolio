import Image from 'next/image';
import Link from 'next/link';
import { LiaDownloadSolid } from 'react-icons/lia';

const AboutSection = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-[150px] dark:bg-[#3c3c3c] dark:text-[#b6b2bf] lg:flex-row lg:gap-12">
      <div className="hidden lg:block lg:w-1/4">
        <Image src="/images/about/1.jpg" alt="about-1" width={278} height={302} className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div className="flex flex-col gap-2">
          <h3 className="font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-0.2px] text-[#ea4343] md:text-2xl">
            About Me
          </h3>
          <h2 className="flex flex-col font-josefin-sense text-3xl font-bold leading-[1.3] tracking-[-2px] text-[#15111e] dark:text-[#ffffff] md:text-5xl">
            <span>
              I&#39;m <span className="text-[#ea4343]">Shahadat</span>
            </span>
            <span>
              Full Stack <span className="text-[#ea4343]">Developer</span>
            </span>
          </h2>
          <h3 className="font-josefin-sense text-xl font-bold text-[#15111e] dark:text-[#ffffff] md:text-3xl">
            Based in Bangladesh
          </h3>
        </div>
        <p>
          Hi! My name is Shahadat Hossain. I am Full Stack Developer and I&#39;m very passionate and dedicated to my
          work.
        </p>
        <p>
          With 4 years experience as a professional Developer, I have acquired the skills and knowledge necessary to
          make your project a success.
        </p>
        <Link
          className="flex w-fit items-center justify-center gap-2 rounded-md border-2 border-[#ea4343] bg-[#ea4343] px-8 py-2 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#15111e] dark:hover:text-white"
          target="_blank"
          href="/resume/shahadat3669_resume.pdf">
          Download CV <LiaDownloadSolid />
        </Link>
      </div>

      <div className="relative hidden w-1/4 lg:block">
        <div className='absolute -bottom-52 left-0 h-full w-full rounded-lg bg-[url("/images/about/2.jpg")] bg-cover bg-center bg-no-repeat' />
      </div>
    </section>
  );
};

export default AboutSection;
