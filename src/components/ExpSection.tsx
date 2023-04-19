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
        <div className={`text-${directionFull}`}>
          <div>{exp.name}</div>
          <div>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
      ))}
    </div>
  );
}