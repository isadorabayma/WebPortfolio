import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const study = experiences.filter((each) => ( each.category === "Formação"))
  const work = experiences.filter((each) => ( each.category === "Experiencia Proficional"))


  return(
    <div className="flex flex-row p-5">
      <ExpSection direction={"r"} data={study}/>
      <ExpSection direction={"l"} data={work}/>
    </div>
  );
}