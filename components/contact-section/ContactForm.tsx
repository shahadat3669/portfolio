/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useFormik } from 'formik';
import { LiaTelegramPlane } from 'react-icons/lia';
import * as Yup from 'yup';

import { cn } from '@/libs/utils';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string(),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-5">
      <div>
        <label htmlFor="fullName" hidden>
          Full Name
        </label>
        <input
          id="fullName"
          className={cn(
            'c-input--shadow w-full appearance-none rounded-lg bg-white p-5 font-open-sans text-lg text-[#aaa6b2] dark:bg-[#4d4c4c] dark:text-[9e9ba3] dark:shadow-none border-none focus-within:ring-[#ea4343]'
          )}
          name="fullName"
          placeholder="Your Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />

        {formik.touched.fullName && formik.errors.fullName ? (
          <p className="mt-2 text-sm text-[#ea4343]">{formik.errors.fullName}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="email" hidden>
          Email Address
        </label>
        <input
          className="c-input--shadow w-full rounded-lg border-none bg-white p-5 font-open-sans text-lg text-[#aaa6b2] focus-within:ring-[#ea4343] dark:bg-[#4d4c4c] dark:text-[9e9ba3] dark:shadow-none"
          id="email"
          name="email"
          placeholder="Your Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="mt-2 text-sm text-[#ea4343]">{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" hidden>
          Phone Number
        </label>
        <input
          className="c-input--shadow w-full rounded-lg border-none bg-white p-5 font-open-sans text-lg text-[#aaa6b2] focus-within:ring-[#ea4343] dark:bg-[#4d4c4c] dark:text-[9e9ba3] dark:shadow-none"
          id="phone"
          placeholder="Your Phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p className="mt-2 text-sm text-[#ea4343]">{formik.errors.phone}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" hidden>
          Message
        </label>
        <textarea
          id="message"
          className="c-input--shadow w-full rounded-lg border-none bg-white p-5 font-open-sans text-lg text-[#aaa6b2] focus-within:ring-[#ea4343] dark:bg-[#4d4c4c] dark:text-[9e9ba3] dark:shadow-none"
          placeholder="Your message here"
          name="message"
          rows={6}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className="mt-2 text-sm text-[#ea4343]">{formik.errors.message}</p>
        ) : null}
      </div>

      <button
        className="flex w-fit items-center justify-center gap-2 rounded-md border-2 border-[#ea4343] bg-[#ea4343] px-8 py-2 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#15111e]"
        type="submit">
        Submit Message <LiaTelegramPlane />
      </button>
    </form>
  );
};

export default ContactForm;
