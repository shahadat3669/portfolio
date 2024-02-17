import Link from 'next/link';
import { LiaEnvelopeSolid, LiaPhoneVolumeSolid } from 'react-icons/lia';

import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col gap-16 px-4 py-[170px] pt-[150px] text-[#b6b2bf] dark:bg-[#3c3c3c]">
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-0.2px] text-[#ea4343] md:text-2xl">
          Get in Touch
        </h3>
        <h2 className="text-center font-josefin-sense text-3xl font-bold leading-[1.3] tracking-[-2px] text-[#15111e] dark:text-[#ffffff] md:text-5xl">
          Connect with Me with Confidence
        </h2>
      </div>
      <div className="flex flex-col justify-center gap-9 md:flex-row">
        <div className="flex flex-col gap-9">
          <p className="max-w-[450px] break-words font-open-sans text-base leading-[1.7] text-[#7d7789] dark:text-[#b6b2bf] md:text-lg">
            Please fill out the form on this section to contact with me. Or Call between 9.00 a.m and 8.00 p.m (+6.00),
            Monday through Friday
          </p>
          <ul className="flex flex-col gap-7">
            <li className="flex items-center gap-12">
              <LiaPhoneVolumeSolid className="text-5xl text-[#33303a] dark:text-white lg:text-7xl" />
              <p className="flex flex-col">
                <span className="font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-2px] text-[#15111e]">
                  Call me
                </span>
                <span itemProp="telephone">
                  <Link
                    className="font-josefin-sense text-xl font-bold leading-[1.2] tracking-[-2px] text-[#ea4343] lg:text-3xl"
                    href="tel:+880190121315">
                    +880 1690 121315
                  </Link>
                </span>
              </p>
            </li>
            <li className="flex items-center gap-12">
              <LiaEnvelopeSolid className="text-5xl text-[#33303a] dark:text-white lg:text-7xl" />
              <p className="flex flex-col">
                <span className="font-josefin-sense text-lg font-bold leading-[1.7] tracking-[-2px] text-[#15111e]">
                  Email
                </span>
                <span itemProp="mail">
                  <Link
                    className="break-words font-josefin-sense text-xl font-bold leading-[1.2] tracking-[-2px] text-[#ea4343] lg:text-3xl"
                    href="mailto:shahadat3669@gmail.com">
                    shahadat3669@gmail.com
                  </Link>
                </span>
              </p>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
