import { IconType } from 'react-icons';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiJest,
  SiRedux,
  // SiTestinglibrary,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiVercel,
  SiSupabase,
} from 'react-icons/si';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiMongodb } from 'react-icons/di';
import {
  FaReact,
  FaDocker,
  FaNodeJs,
  FaTrello,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

export type SkillType = [IconType, string];

const hardSkills: SkillType[] = [
  [IoLogoJavascript, 'Javascript'],
  [SiTypescript, 'Typescript'],
  [SiPython, 'Python'],
  [AiFillHtml5, 'HTML 5'],
  [FaReact, 'React'],
  [SiRedux, 'Redux'],
  [DiCss3, 'CSS 3'],
  [DiSass, 'Sass'],
  [SiTailwindcss, 'Tailwindcss'],
  // [SiTestinglibrary, 'RTL'],
  [SiJest, 'Jest'],
  [FaNodeJs, 'Node.js'],
  [GrMysql, 'MySQL'],
  [DiMongodb, 'MongoDB'],
  [FaDocker, 'Docker'],
  [AiOutlineGithub, 'GitHub'],
];

const frontEnd: SkillType[] = [
  [IoLogoJavascript, 'Javascript'],
  [SiTypescript, 'Typescript'],
  [SiPython, 'Python'],
  [AiFillHtml5, 'HTML 5'],
  [FaReact, 'React'],
  [SiRedux, 'Redux'],
  [DiCss3, 'CSS 3'],
  [DiSass, 'Sass'],
  [SiTailwindcss, 'Tailwindcss'],
  [SiJest, 'Jest'],
];

const backEnd: SkillType[] = [
  [FaNodeJs, 'Node.js'],
  [GrMysql, 'MySQL'],
  [DiMongodb, 'MongoDB'],
  [FaDocker, 'Docker'],
];

const tools: SkillType[] = [
  [AiOutlineGithub, 'GitHub'],
  [FaTrello, 'Trello'],
  [SiVercel, 'Vercel'],
  [SiSupabase, 'Supabase'],
];

export { hardSkills, frontEnd, backEnd, tools };
