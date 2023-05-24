import { X, CaretRight, CaretLeft } from "phosphor-react";
import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { SheetProps } from "../filesInfo";

export function Sheet({name, z, rotate, right, handleSection, index}: SheetProps) {
  const sectionNames = [ "About", "Skills", "Experience", "Projects", "Contact" ]
  console.log(sectionNames.length);
  
  return (
    <div id={`sheet-${name}`} className={`absolute ${z} ${rotate} ${right} drop-shadow-xl bg-stone-200 ring-1 ring-gray-900/10`}>
      <div className="h-[53rem]">
        <div className="flex flex-row justify-between mt-10 mx-10">
          <h1 id="title-sheet-section" className="text-4xl text-stone-800 font-serif font-semibold">{name}</h1>
          <div className="flex flex-row mt-1 mx-0 sm:mx-3 space-x-3">
            {name === sectionNames[0] &&
            <button onClick={() => handleSection(name)}>
              <X size={25} weight="bold"/>
            </button>
            }
            {name !== sectionNames[0] &&
            <button  onClick={() => handleSection(sectionNames[index - 1])}>
              <CaretLeft size={25} weight="bold"/>
            </button>
            }
            {name !== sectionNames[2] &&
            <button onClick={() => handleSection(sectionNames[index + 1])}>
              <CaretRight size={25} weight="bold"/>
            </button>
            }
            {name === sectionNames[2] &&
            <button onClick={() => handleSection(name)}>
              <X size={25} weight="bold"/>
            </button>
            }
          </div>
        </div>
        <div id="content-sheet-section" className="relative border-y-2 border-stone-800  mx-5 sm:mx-10 h-[47.5rem]">
          {"About" === name && <About/>}
          {"Skills" === name && <Skills/>}
          {"Experience" === name && <Experience/>}
          <button onClick={() => handleSection(name)} className="absolute right-1 bottom-2">
            <X size={25} weight="bold"/>
          </button>
        </div>
      </div>
    </div>
  );
}

