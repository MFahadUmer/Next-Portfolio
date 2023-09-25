import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Bachelors of Software Engineering',
    location: 'Faisalabad, PK',
    description:
      '4 year College degree in Software Engineering, where I learned the basics of Software Development Techniques and models',
    icon: React.createElement(LuGraduationCap),
    date: '2012-2016',
  },
  {
    title: 'Teacher',
    location: 'Punjab, PK',
    description:
      'I was a teacher in the Punjab Education Department for over 4 years. My classroom was welcoming, friendly, and engaging for all students.',
    icon: React.createElement(CgWorkAlt),
    date: '2017-2021',
  },
  {
    title: 'Graduated Bootcamp',
    location: 'Microverse, Remote',
    description:
      'I graduated after 1 year of studying. I immediately found a job as a junior software engineer developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2022',
  },
  {
    title: 'Junior Software Engineer',
    location: 'Remote, PK',
    description:
      'I worked here for almost one year as a full stack web developer with the back-end(ROR) and front end with react.js. My role here was to write the APIs for multiple applications(Web, Mobile) and also integrate them into the web application(React) of Pynwheel.',
    icon: React.createElement(FaReact),
    date: 'Jan-2022 - Nov-2022',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Ruby',
  'Ruby on Rails',
  'Git',
  'Tailwind',
  'Material UI',
  'Redux',
  'GraphQL',
  'PostgreSQL',
  'Framer Motion',
] as const;
