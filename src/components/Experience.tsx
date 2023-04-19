import { experiences } from "../expereceInfo";
import { ExpSection } from "./ExpSection";

export function Experience() {
  return(
    <div className="flex flex-row p-5">
      <ExpSection direction={"r"}/>
      <ExpSection direction={"l"}/>
    </div>
  );
}