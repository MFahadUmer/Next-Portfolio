import React from 'react';

import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { Project } from '@/components/project';

export default function Projects() {
  return (
    <section className="scroll-mt-28" id="projects">
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
