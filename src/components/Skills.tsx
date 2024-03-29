import { frontEnd, backEnd, tools } from '../skillsInfo';
import { SkillsSection } from './SkillsSection';

export function Skills() {
  return (
    <section id="skills" className="text-stone-800">
      <SkillsSection skills={frontEnd} title="FrontEnd" />
      <SkillsSection skills={backEnd} title="BackEnd" />
      <SkillsSection skills={tools} title="Tools" />
    </section>
  );
}
