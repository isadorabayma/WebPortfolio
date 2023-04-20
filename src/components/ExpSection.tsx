import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]
  height: (year:ExperienceType) => String
}

export function ExpSection({ direction, data, height }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
    
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem] flex flex-col`}>
      {data.map((exp) => (
        <div className={`px-5 h-[${height(exp)}]`}>
          <div className={directionFull}>{exp.name}</div>
          <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>)
      )}
    </div>
  );
}