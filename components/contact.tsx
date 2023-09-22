'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const ref = useSectionInView('Contact', 0.5);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb:20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:eng.fahadumer@gmail.com">
          eng.fahadumer@hmail.com
        </a>
        &nbsp; or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg border borderBlack p-4"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 border rounded-lg borderBlack p-4"
        ></textarea>
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-11- hover:scale-110 hover:bg-gray-950 active:scale-105"
          type="submit"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
