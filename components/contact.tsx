'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmails';
import SubmitBtn from '@/components/submit-btn';

export default function Contact() {
  const ref = useSectionInView('Contact', 0.5);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setEmail('');
    setMessage('');
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb:20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:eng.fahadumer@gmail.com">
          eng.fahadumer@gmail.com
        </a>
        &nbsp; or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          } else {
            toast.success('Email sent successfully');
            clearForm();
          }
        }}
      >
        <input
          className="h-14 rounded-lg border borderBlack p-4"
          name="senderEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-52 my-3 border rounded-lg borderBlack p-4"
          required
          name="message"
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
