import ResumeTabs from './ResumeTabs';

const ResumeSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col gap-8 px-4 py-[170px] pt-[150px] dark:bg-[#3c3c3c] dark:text-[#b6b2bf]">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-0.2px] text-[#ea4343] md:text-2xl">
            Know More
          </h3>
          <h2 className="font-josefin-sense text-3xl font-bold leading-[1.3] tracking-[-2px] text-[#15111e] dark:text-[#ffffff] md:text-5xl">
            My Resume
          </h2>
        </div>
        <p>
          I enjoy every step of the software development process, from discussion and collaboration to concept and
          execution
        </p>
      </div>
      <div />
      <ResumeTabs />
    </section>
  );
};

export default ResumeSection;
