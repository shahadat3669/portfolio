import ContactSection from '@/components/contact-section/ContactSection';
import CounterSection from '@/components/counter-section/CounterSection';
import ResumeSection from '@/components/resume-section/ResumeSection';
import SkillsSection from '@/components/skills-section/SkillsSection';

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-start">
      <CounterSection />
      <ContactSection />
      <SkillsSection />
      <ResumeSection />
    </main>
  );
}
