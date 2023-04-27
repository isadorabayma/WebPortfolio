import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: string;
  data: ExperienceType[]
}

export function ExpSection({ direction, data }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const directionBar = direction === "r" ? "flex-row justify-end" : "flex-row-reverse";
  const ptSection = direction === "l" ? "pt-2 pb-64" : "pt-12 space-y-20";

    
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem] flex flex-col justify-around ${ptSection}`}>
      {data.map((exp, i) => {
        const durationHeight = `h-[${exp.duration}rem]`;
        const durationHeightB = `h-[${Number(exp.duration) + 2 }rem]`;
        return(
          <div key={i} className={`flex ${directionBar} ${durationHeightB}`}>
            <div className={`w-56 sm:w-60`}>
              <div className={directionFull}>{exp.name}</div>
              <div className={directionFull}>{exp.place}</div>
              <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
            </div>
            <div className={`mt-1 mx-1 sm:mx-2 w-2 sm:w-4 rounded-md bg-cyan-800 ${durationHeight}`}/>
          </div>      
        )}
      )}
    </div>
  );
}