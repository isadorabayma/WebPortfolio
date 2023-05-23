import { X } from "phosphor-react";
import { FileProps } from "../filesInfo";
import { ProjectType, projectsInfo } from "../projectsInfo";
import { ProjectCard } from "./ProjectCard";

// make function filter by language here and pass to projectCard this should change the array of projects the should be in the state here

export function Tablet({handleSection, sectionInfo}: FileProps) {
  const PROJECTS_INDEX = 3;
  const projects = sectionInfo[PROJECTS_INDEX];
  const {margin, name, rotate, right, z} = projects

  return (
    <>
      <div id="shadow-tablet" className={`absolute ${margin} ${rotate} bg-black/70 blur-lg`}>
      </div>
      <div id="tablet" 
      onClick={() => handleSection(name)}
      className={`absolute ${rotate} ${right} drop-shadow-xl 
      bg-black rounded-[2rem] border-b-2 border-r-2 border-stone-600
      p-1 md:py-10 ring-1 ring-gray-900/5`}>
        <div id="screan" className={`bg-stone-200 
        h-full w-full border-2 border-stone-800 rounded-[1.75rem] md:rounded-sm  ${z} scrollbar-hide`}>
          <h1 className="text-3xl md:text-5xl text-stone-800 mt-3 ml-5 font-serif font-semibold">Projects</h1>
          <div id="content-tablet-section" className="relative border-y-2 border-stone-800 m-2 md:m-4 md:mb-10 md:py-3">
            { projectsInfo.map((project) => (
              <ProjectCard key={project.name} project={project}/>
            )) }
            <button className="absolute right-2 -bottom-9">
              <X size={25} weight="bold"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
