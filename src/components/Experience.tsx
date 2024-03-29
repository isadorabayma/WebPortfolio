import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  const expSort = experiences.sort((a, b) => Number(b.endYear) - Number(a.endYear));

  return(
    <div className="h-full mt-16 relative">
      <ExpSection data={expSort}/>
      <div className="absolute -top-8 h-[42rem] w-1/2 border-r-2 border-stone-800 "></div>
    </div>
  );
}