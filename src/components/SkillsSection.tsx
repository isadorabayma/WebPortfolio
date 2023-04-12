import { SkillType } from '../skillsInfo';

interface SkillsSectionProps {
  skills: SkillType[];
  title: string;
}

export function SkillsSection({ skills, title }: SkillsSectionProps) {
  return (
      <div className="pt-8">
        <h2 className="text-3xl font-serif font-semibold pl-4">{title}</h2>
        <div className="flex flex-wrap border-l-2 border-stone-800 ml-5 pl-4">
          {skills.map(([Icon, Name]: SkillType) => (
            <div
              key={Name}
              className="pt-5 flex flex-col items-center w-20 " 
            >
              <Icon size={50} />
              <h2 className="pt-1 text-base text-center">{Name}</h2>
            </div>
          ))}
        </div>
      </div>
  );
}
