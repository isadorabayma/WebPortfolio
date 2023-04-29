import { X } from "phosphor-react";
import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { SheetProps } from "../filesInfo";

export function Sheet({name, z, rotate, right, handleSection, index}: SheetProps) {
  const rightChange = right ? right : "right-12"
  
  return (
    <div id="sheet" className={`absolute transition-all ease-in-out duration-1000 ${z} ${rotate} ${rightChange} m-20 drop-shadow-xl bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem]`}>
      <div className="h-[43rem]">
        <h1 id="title-sheet-section" className="text-5xl text-stone-800 mt-10 mx-36 sm:mx-10 font-serif font-semibold">{name}</h1>
        <div id="content-sheet-section" className="relative h-full border-y-2 border-stone-800 mx-10">
          {"About" === name && <About/>}
          {"Skills" === name && <Skills/>}
          {"Experience" === name && <Experience/>}
          <button onClick={() => handleSection(name, index)} className="absolute right-20 sm:right-1 bottom-2">
            <X size={25} weight="bold"/>
          </button>
        </div>
      </div>
    </div>
  );
}

