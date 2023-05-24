import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  direction: string;
  data: ExperienceType[]
}

export function ExpSection({ direction, data }: ExpSectionProps) {
  const directionFull = direction === "l" ? "text-left" : "text-right";
  const directionBar = direction === "r" ? "flex-row" : "flex-row-reverse";
  const ptSection = direction === "l" ? "pt-2 pb-64" : "pt-12 space-y-20";

  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

    
  return(
    // <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem] flex ${directionBar} justify-around ${ptSection} `}>
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[43rem] flex ${directionBar} justify-end px-2`}>
      <div id="time-bar" className="flex flex-col-reverse">
        {years.map((year) => 
          data.map((exp) => 
            (year >= exp.startYear && year <= exp.endYear ) && (
              <div className="flex flex-row">
                <div className="w-2 border border-stone-700 bg-black"></div>
                <div>{year}</div>
              </div>
            ) 
          )
        )}
      </div>      
    </div>
  );
}

// {data.map((exp, i) => {
//   // const durationHeight = `h-[${exp.duration}rem]`;
//   // const durationHeightB = `h-[${Number(exp.duration) + 2 }rem]`;
//   return(
//     // <div key={i} className={`flex ${directionBar}`}>
//     <div key={i}>
//       <div className={`w-56 sm:w-60`}>
//         <div className={directionFull}>{exp.name}</div>
//         <div className={directionFull}>{exp.place}</div>
//         <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
//       </div>
//     </div>      
//   )
// })}

{/* <div id="expirencies">
  {data.map((exp)=> 

    <div>
      <div className="h-5 w-2 border border-stone-700 bg-black"></div>
      <div>{`${exp.startYear}`}</div>
    </div>
  )}
</div> */}




