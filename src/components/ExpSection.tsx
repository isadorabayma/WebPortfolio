import { ExperienceType } from "../expereceInfo";

interface ExpSectionProps {
  data: ExperienceType[]
}

export function ExpSection({ data }: ExpSectionProps) {

  return(
    <div className="h-full">
      <div id="time-bar" className="h-full flex flex-col">
      { data.map((exp, i) => {
        const directionFull = exp.category !== "Experiencia Proficional" ? "text-left" : "text-right";
        const directionBar = exp.category === "Experiencia Proficional" ? "flex-row" : "flex-row-reverse";
        const margin = i <= 4 && "-my-5 sm:-my-4"

        return(
          <div key={exp.name} className={`flex ${directionBar} ${margin} justify-center relative`}>
            <div id="exp-info" className="w-1/2 py-2 sm:py-4" >
              <div className={directionFull}>{exp.name}</div>
              <div className={directionFull}>{exp.place}</div>
              <div className={directionFull}>{`${exp.startYear} - ${exp.endYear}`}</div>
            </div>
            <div id="duration-time-line" className="top-3 w-4 h-4 mt-6 mx-2 bg-teal-900 rounded-full"></div>
            <div className="w-1/2"></div>
          </div>
        )})}
      </div>      
    </div>
  );
}
