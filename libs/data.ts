import type { IconType } from 'react-icons';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';

export type SkillProps = {
  id: number;
  skillName: string;
  progress: number;
};

export type ResumeListItemProps = {
  id: number;
  listItemTitle: string;
  listItemSubtitle: string;
  listItemDuration?: string;
  listItemLink?: string;
  listItemDescription?: string;
};

export type ResumeListProps = {
  id: number;
  title: string;
  icon: IconType;
  list: ResumeListItemProps[];
};

export const mySkillsData: SkillProps[] = [
  { id: 1, skillName: 'React JS', progress: 80 },
  { id: 1, skillName: 'CSS', progress: 80 },
  { id: 1, skillName: 'TypeScript', progress: 75 },
  { id: 1, skillName: 'Ruby On Rails', progress: 70 },
];

const educationListData: ResumeListItemProps[] = [
  {
    id: 1,
    listItemTitle: 'Full-stack development program',
    listItemSubtitle: 'Microverse Org',
    listItemDescription:
      "Microverse's full-stack web development program is a great place to enhance technical and non-technical skills. It's offer a complete process of developing an app or software from an initial idea. It also prepares for remote work through practicing and improving skills through cross-cultural and remote collaboration.",
    listItemDuration: '2023 - 2024',
  },
  {
    id: 2,
    listItemTitle: 'B.Sc in Computer Science & Engineering',
    listItemSubtitle: 'Port City International University',
    listItemDescription:
      "Port City International University's BSc program offers a dynamic education with state-of-the-art facilities, experienced faculty, and diverse extra curriculum, preparing students to excel in their chosen fields and become community leaders.",
    listItemDuration: '2019 - 2023',
  },
];

export const educationData: ResumeListProps = {
  id: 1,
  title: 'Education',
  icon: FaGraduationCap,
  list: educationListData,
};

const experienceListData: ResumeListItemProps[] = [
  {
    id: 1,
    listItemTitle: 'Code Reviewer',
    listItemSubtitle: 'Microverse Org',
    listItemDescription:
      'Review codes written by software development students, giving them valuable feedback and improving the quality of their programs. Also offer relevant resources to develop their skills. Evaluate code clarity, style, and best practices.',
    listItemDuration: 'May 2023 - present',
  },
  {
    id: 2,
    listItemTitle: 'Full Stack Developer',
    listItemSubtitle: 'Self Employed',
    listItemDescription:
      'Actively involved in developing and maintaining multiple Full-stack applications as a self-employed developer, utilizing a diverse range of programming languages, frameworks, and technologies.  Deliver high-quality and scalable solutions, collaborating closely with clients to comprehend their needs and transform them into robust software applications.',
    listItemDuration: 'Jan 2022 - present',
  },
  {
    id: 3,
    listItemTitle: 'Computer Hardware Technician (2 years)',
    listItemSubtitle: 'Self Employed',
    listItemDescription:
      'Serviced over 1000 computer systems including desktops, laptops, and server computers. Updated and documented tickets regularly to maintain an open line of communication with coworkers and supervisors. Repaired desktop hardwares, laser printers, HP and Epson printers, and laptops. Investigated hardware product issues involving materials and software and devised solutions.',
    listItemDuration: 'Jan 2018 - Dec 2019',
  },
];

export const experienceData: ResumeListProps = {
  id: 1,
  title: 'Experience',
  icon: FaBriefcase,
  list: experienceListData,
};

export const resumeTabsData = [
  { id: 0, title: 'Education' },
  { id: 1, title: 'Experiences' },
  { id: 2, title: 'Certificates' },
];
