import { SkillType } from '../skillsInfo';

interface SkillsSectionProps {
  skills: SkillType[];
  title: string;
}

export function SkillsSection({ skills, title }: SkillsSectionProps) {
  return (
      <div className="pt-8">
        <h2 className="text-3xl font-serif font-semibold pl-4 border-b-2 border-stone-300 sm:border-b-0 ">{title}</h2>
        <div className="flex flex-wrap sm:border-l-2 sm:border-stone-800 sm:ml-5 sm:px-3 sm:pl-4">
          {skills.map(([Icon, Name]: SkillType) => (
            <div
              key={Name}
              className="pt-2 mx-1 flex flex-col items-center w-16 sm:w-20 " 
            >
              <Icon size={50} />
              <h2 className="pt-1 text-sm sm:text-base text-center">{Name}</h2>
            </div>
          ))}
        </div>
      </div>
  );
}
