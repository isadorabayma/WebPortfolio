import { ExperienceType } from "../expereceInfo";
import { experiences } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]
  yearsSize: Number
  expLength: Number
}

export function ExpSection({ direction, data, yearsSize, expLength }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const hightSize = `h-[${Math. floor(38 / Number(expLength))}rem]`;
  const expSort = experiences.sort((a, b) => Number(b.endYear) - Number(a.endYear));
  

  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem]`}>
      {expSort.map((exp)=>(
        exp.category === "Formação" ?
        <div className="px-5 h-[5rem]">
          <div className={"text-left"}>{exp.name}</div>
          <div className={"text-left"}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
        :
        <div className="px-5 h-[5rem]">
          <div className={"text-right"}>{exp.name}</div>
          <div className={"text-right"}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
      ))}
    </div>
  );
}