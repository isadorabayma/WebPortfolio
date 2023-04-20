import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]
  bottomSize: (year:Number) => String
}

export function ExpSection({ direction, data, bottomSize }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
    
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem] relative`}>
      {data.map((exp)=>(
        <div className={`absolute px-5 ${bottomSize(exp.endYear)}`}>
        {/* // <div className={`absolute px-5 bottom-[14rem]`}> */}
          <div className={directionFull}>{exp.name}</div>
          <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
        </div>
      ))}
    </div>
  );
}