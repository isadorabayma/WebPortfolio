import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const study = experiences.filter((each) => ( each.category === "Formação")).sort((a, b) => Number(b.endYear) - Number(a.endYear));
  
  const work = experiences.filter((each) => ( each.category === "Experiencia Proficional")).sort((a, b) => Number(b.endYear) - Number(a.endYear));

  const lastYear = experiences.sort((a, b) => Number(b.endYear) - Number(a.endYear))[0].endYear

  const firstYear = experiences.sort((a, b) => Number(a.startYear) - Number(b.startYear))[0].startYear

  const yearsSize = Number(lastYear) - Number(firstYear)

  const expLength = experiences.length

  return(
    <div className="flex flex-row p-5">
      <ExpSection direction={"r"} data={study} yearsSize={yearsSize} expLength={expLength}/>
      <ExpSection direction={"l"} data={work} yearsSize={yearsSize} expLength={expLength}/>
    </div>
  );
}