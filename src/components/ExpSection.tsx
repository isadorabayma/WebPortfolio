import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: string;
  data: ExperienceType[]
}

export function ExpSection({ direction, data }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const directionBar = direction === "r" ? "flex-row" : "flex-row-reverse";
    
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[43rem] relative justify-end px-2`}>
      <div id="time-bar" className="">
      { data.map((exp) => {
        const duration = `h-[${exp.duration}rem]`;
        const top = `top-[${exp.endYear - 2010}rem]`;

        return(
          <div key={exp.name} className={`absolute ${top} flex ${directionBar}`}>
            <div id="exp-info">
              <div className={directionFull}>{exp.name}</div>
              <div className={directionFull}>{exp.place}</div>
              <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
            </div>
            <div id="duration-time-line" className={`w-[1rem] mx-0 border border-stone-900 ${duration}`}></div>
          </div>
        )})}
      </div>      
    </div>
  );
}

// {
//   data.map((exp, i) =>
//       <div key={i} className={`flex ${directionBar}`}>
//       <div key={i}>
//         <div className={`w-56 sm:w-60`}>
//           <div className={directionFull}>{exp.name}</div>
//           <div className={directionFull}>{exp.place}</div>
//           <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
//         </div>
//       </div>      
//   )
//   }