import ContactSection from '@/components/contact-section/ContactSection';

import CounterSection from '../components/counter-section/CounterSection';

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-start">
      <CounterSection />
      <ContactSection />
    </main>
  );
}
