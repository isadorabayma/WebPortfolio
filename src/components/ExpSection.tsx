import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]

}

export function ExpSection({ direction, data }: ExpSectionProps) {
  const directionFull = direction === "l" ? "left" : "right";

  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem]`}>
      {data.map((exp)=>(
        <div className="p-5">
          <div className={`text-${directionFull}`}>{exp.name}</div>
          <div className={`text-${directionFull}`}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
      ))}
    </div>
  );
}