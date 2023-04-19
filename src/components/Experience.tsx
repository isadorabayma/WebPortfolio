import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const study = experiences.filter((each) => ( each.category === "Formação"))
  // items.sort((a, b) => a.value - b.value); 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const work = experiences.filter((each) => ( each.category === "Experiencia Proficional"))


  return(
    <div className="flex flex-row p-5">
      <ExpSection direction={"r"} data={study}/>
      <ExpSection direction={"l"} data={work}/>
    </div>
  );
}