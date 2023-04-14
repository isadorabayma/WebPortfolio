import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

interface SheetProps {
  name: String;
  z: string;
  rotate: String;
  right: String;
}

export function Sheet({name, z, rotate, right}: SheetProps) {
  return (
    <div id="sheet" className={`absolute right-12 ${z} ${rotate} ${right} m-20 drop-shadow-xl bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem]`}>
      <div className="h-[43rem]">
        <h1 id="title-sheet-section" className="text-5xl text-stone-800 mt-10 mx-10 font-serif font-semibold">{name}</h1>
        <div id="content-sheet-section" className="h-full border-y-2 border-stone-800 mx-10">
          {"About" === name && <About/>}
          {"Skills" === name && <Skills/>}
          {"Experience" === name && <Experience/>}
        </div>
      </div>
    </div>
  );
}
