import { ExperienceType, experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const study = experiences.filter((each) => ( each.category === "Formação")).sort((a, b) => Number(b.endYear) - Number(a.endYear));
  
  const work = experiences.filter((each) => ( each.category === "Experiencia Proficional")).sort((a, b) => Number(b.endYear) - Number(a.endYear));

  const expSort = experiences.sort((a, b) => Number(b.endYear) - Number(a.endYear))

  const lastYear = expSort[0].endYear

  const firstYear = expSort[expSort.length - 1].startYear

  const yearsSize = Number(lastYear) - Number(firstYear)

  const heightSize = Math. floor(38 / Number(yearsSize));

  function height(exp: ExperienceType) {
    return(
      `${Math.ceil((Number(exp.endYear) - Number(exp.startYear)) * 100 / yearsSize)}%`
    )
  } 

  return(
    <div className="flex flex-row p-5">
      <ExpSection direction={"r"} data={study} height={height}/>
      <ExpSection direction={"l"} data={work} height={height}/>
    </div>
  );
}