'use client';
import React from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Project } from '@/components/project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const ref = useSectionInView('Projects', 0.5);
  return (
    <section className="scroll-mt-28 mb-28 sm:mb-0" id="projects" ref={ref}>
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
