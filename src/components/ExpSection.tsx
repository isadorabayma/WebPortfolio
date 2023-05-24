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
        const rotatePoint = exp.category !== "Experiencia Proficional" ? "rotate-[135deg]" : "-rotate-45";
        const margin = i <= 5 && "-mt-10 sm:-my-4"

        return(
          <div key={exp.name} className={`flex ${directionBar} ${margin} justify-center relative`}>
            <div id="exp-info" className="w-1/2 py-5" >
              <div className={`font-bold  text-teal-900 ${directionFull}`}>{exp.name}</div>
              <div className={`font-bold ${directionFull}`}>{exp.place}</div>
              <div className={`font-bol ${directionFull}`}>{`${exp.startYear} - ${exp.endYear}`}</div>
            </div>
            <div id="duration-time-line" className={`w-5 h-5 mt-[1.4rem] mx-3 bg-teal-700/60 rounded-b-full rounded-tr-full ${rotatePoint}`}></div>
            <div className="w-1/2"></div>
          </div>
        )})}
      </div>      
    </div>
  );
}
