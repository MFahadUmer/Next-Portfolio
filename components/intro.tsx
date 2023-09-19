'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              width="192"
              height="192"
              quality="95"
              priority={true}
              src="/avatar.jpeg"
              alt="Muhammad's Portrait"
              className="h-24 w-24 border-[0.35rem] rounded-full object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 0.2,
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I&apos;m Muhammad Fahad.</span>&nbsp;
        I&apos;m a <span className="font-bold">full-stack developer</span>
        &nbsp;with&nbsp;
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is on
        &nbsp;
        <span className="underline">React (Next.js) & Ruby on Rails</span>.
      </motion.p>
    </section>
  );
}
