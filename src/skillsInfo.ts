import { IconType } from 'react-icons';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiJest,
  SiRedux,
  SiTestinglibrary,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  // SiStyledcomponents,
} from 'react-icons/si';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiMongodb } from 'react-icons/di';
import {
  FaReact,
  FaDocker,
  FaNodeJs,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

export type SkillType = [IconType, string];

const hardSkills: SkillType[] = [
  [IoLogoJavascript, 'Javascript'],
  [SiTypescript, 'Typescript'],
  [SiPython, 'Python'],
  [AiFillHtml5, 'HTML 5'],
  [DiCss3, 'CSS 3'],
  [DiSass, 'Sass'],
  [SiTailwindcss, 'Tailwindcss'],
  [SiJest, 'Jest'],
  [FaReact, 'React'],
  [SiRedux, 'Redux'],
  [SiTestinglibrary, 'RTL'],
  [FaNodeJs, 'Node.js'],
  [GrMysql, 'MySQL'],
  [DiMongodb, 'MongoDB'],
  [FaDocker, 'Docker'],
  [AiOutlineGithub, 'GitHub'],
];

export { hardSkills };
