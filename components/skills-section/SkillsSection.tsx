import { mySkillsData } from '@/libs/data';

import ProgressBar from './ProgressBar';

const SkillsSection = () => {
  return (
    <section className="bg-[#ba3c3c]">
      <div className="container relative mx-auto flex flex-col  gap-12 px-4 py-[170px] pb-[560px] text-white xl:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-0.2px] md:text-2xl">
              My Skills
            </h3>
            <h2 className="font-josefin-sense text-3xl font-bold leading-[1.3] tracking-[-2px] md:text-5xl">
              You Can Imagine I Can Do
            </h2>
          </div>
          <p>
            Throughout my years of experience, I have honed my skills as a Full-stack Developer, Code Reviewer,
            Technical Writer, and Mentor. I have dedicated 4 years to studying Computer Science and Engineering.
          </p>
        </div>
        <div className="mt-8 flex flex-1 flex-col gap-2">
          {mySkillsData.map((skill) => (
            <ProgressBar key={skill.id} progress={skill.progress} text={skill.skillName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
