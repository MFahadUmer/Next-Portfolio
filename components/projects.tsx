'use client';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Project } from '@/components/project';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
