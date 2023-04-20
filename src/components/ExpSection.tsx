import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]
  yearsSize: Number
  expLength: Number
}

export function ExpSection({ direction, data, yearsSize, expLength }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const hightSize = 38 / Number(yearsSize)

  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem]`}>
      {data.map((exp)=>(
        <div className={`p-5 h-[${hightSize}rem]`}>
          <div className={`${directionFull}`}>{exp.name}</div>
          <div className={`${directionFull}`}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
      ))}
    </div>
  );
}