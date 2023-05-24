import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const study = experiences.filter((each) => ( each.category === "Formação")).sort((a, b) => Number(b.endYear) - Number(a.endYear));
  
  const work = experiences.filter((each) => ( each.category === "Experiencia Proficional")).sort((a, b) => Number(b.endYear) - Number(a.endYear));

  return(
    <div className="flex flex-row pt-5">
      <ExpSection direction={"r"} data={study}/>
      <ExpSection direction={"l"} data={work}/>
    </div>
  );
}