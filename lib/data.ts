import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { SiRubyonrails } from 'react-icons/si';
import { LuGraduationCap } from 'react-icons/lu';
import reactdashboard from '@/public/react-dashboard.png';
import pynwheel from '@/public/pynwheel.png';
import socialMedia from '@/public/social-media.png';
import newsWeek from '@/public/newsWeek.png';
import nextDashboard from '@/public/nextDashboard.png';
import nextCars from '@/public/next-cars.png';
import nextBlog from '@/public/next-blog.png';
import smashingMagazine from '@/public/smashing-magazine.png';

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
    title: 'Primary School Teacher',
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
    location: 'Intagleo Systems, PK',
    description:
      'I worked here for almost one year as a full stack web developer with the back-end(ROR) and front end with react.js. My role here was to write the APIs for multiple applications(Web, Mobile) and also integrate them into the web application(React) of Pynwheel.',
    icon: React.createElement(SiRubyonrails),
    date: '2022 - 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'Pynwheel (Private)',
    description:
      'Pynwheel applications modernize sales and leasing offices in apartment and condominium communities across the USA. Sales and leasing consultants use Pynwheel to help prospective residents narrow down the available units that meet their needs, making the sales process more efficient - and fun! Pynwheel applications include an interactive property map, floor plan gallery, media gallery, neighborhood map, and a digital brochure builder. Pynwheel is available on large format touchscreens, desktop touchscreens, tablets, as an iPad & iPhone app, and as a website extension',
    tags: [
      'Ruby on Rails',
      'React',
      'Redux',
      'Material UI',
      'JQuery',
      'Postgresql',
    ],
    imageUrl: pynwheel,
  },
  {
    title: 'Next Blog (Portfolio Project)',
    description:
      'This is a sample project to practice Next.js. I used Next.js, CSS, and Next Auth to build this project.',
    tags: ['Next.js', 'React', 'CSS', 'Next Auth', 'Redux', 'Mongoose'],
    imageUrl: nextBlog,
  },
  {
    title: 'Next Car (Portfolio Project)',
    description:
      'This is a Next App (App Router) where I tried multiple things like Headless UI, Next.js, Tailwind CSS and much much more.',
    tags: ['React', 'Next.js', 'Headless UI', 'Tailwind CSS', 'Redux'],
    imageUrl: nextCars,
  },
  {
    title: 'React Dashboard (Portfolio Project)',
    description:
      'This is a basic react dashboard where I tried multiple things like ApexCharts, Framer motion, MUi and much much more.',
    tags: ['React', 'Material UI', 'Framer Motion', 'ApexCharts', 'Redux'],
    imageUrl: reactdashboard,
  },
  {
    title: 'Social Media Clone (Portfolio Project)',
    description:
      'This is a basic social media clone app where I tried multiple things like MUI with theming and much much more.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: socialMedia,
  },

  {
    title: 'Next Dashboard (Portfolio Project)',
    description:
      'This is a basic Next dashboard (Pages Router) where I tried multiple things like ApexCharts, Framer motion, MUi and much much more.',
    tags: [
      'React',
      'Next.js',
      'Material UI',
      'Styled Components',
      'ApexCharts',
      'Redux',
    ],
    imageUrl: nextDashboard,
  },

  {
    title: 'NewsWeek Clone (Portfolio Project)',
    description:
      'This is a project based on a working news website . In this project I used all the previous knowledge like flex box grid float position and I also applied some new knowledge like bootstrap for this project. This website is responsive as it is build in bootstrap.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    imageUrl: newsWeek,
  },
  {
    title: 'Smashing Magazine Clone (Portfolio Project)',
    description:
      'this is a clone of the Smashing Magazine landing page in grayscale',
    tags: ['HTML', 'CSS'],
    imageUrl: smashingMagazine,
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
