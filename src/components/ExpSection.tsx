import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: String;
  data: ExperienceType[]
}

export function ExpSection({ direction, data }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const directionBar = direction === "r" ? "flex-row justify-end" : "flex-row-reverse";
  const ptSection = direction === "l" ? "pt-2 pb-64" : "pt-12 space-y-20";

    
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem] flex flex-col justify-around ${ptSection}`}>
      {data.map((exp) => {
        const durationHeight = `h-[${exp.duration}rem]`;
        const durationHeightB = `h-[${Number(exp.duration) + 2 }rem]`;
        return(
          <div className={`flex ${directionBar} ${durationHeightB}`}>
            <div className={`w-60`}>
              <div className={directionFull}>{exp.name}</div>
              <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
            </div>
            {/* <div className={`border border-r-8 border-cyan-800 ${durationHeight}`}/> */}
            <div className={`mt-2 mx-2 w-4 rounded-md bg-cyan-800 ${durationHeight}`}/>
          </div>      
        )}
      )}
    </div>
  );
}