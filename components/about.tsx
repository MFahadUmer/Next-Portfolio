'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const ref = useSectionInView('About');
  return (
    <motion.section
      ref={ref}
      className="mb-14 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello, I&apos;m Muhammad Fahad, a{' '}
        <span className="font-medium">Software Developer</span> with a sound
        foundation in both education and practical experience. I proudly hold a
        degree in <span className="font-medium">Software Engineering</span> from{' '}
        <span className="font-medium">
          Govt. College University, Faisalabad
        </span>
        . I graduated from <span className="font-medium">Microverse</span> , a
        remote school that emphasizes project-based learning and pair
        programming. <br />
        During my nearly 1-year tenure as a remote{' '}
        <span className="font-medium">junior software engineer</span> at{' '}
        <span className="font-medium">Intagleo Systems, Pakistan</span> , I got
        a chance to work with a client based in the{' '}
        <span className="font-medium">USA</span> , specifically with{' '}
        <span className="font-medium">Pynwheel</span>, a property-related
        business. This experience helped me understand how to create solutions
        for clients with different needs. <br />
        I&apos;m passionately involved in my side project, which revolves around{' '}
        <span className="font-medium">mobile specifications</span>. I can use my
        skills and knowledge to create a useful tech resource for checking
        mobile specs, deals, and trading phones. <br />
        I&apos;m on the lookout for dynamic roles where I can further harness my
        software development skills alongside innovative teams. If you&apos;re
        seeking a developer-driven to make a tangible impact, I&apos;m your
        person. How about we explore a potential collaboration?
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, and watching movies. I also
        enjoy <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
