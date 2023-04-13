import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

interface SheetProps {
  section: String;
  z: string;
  rotate: String;
  margin: String;
}

export function Sheet(props: SheetProps) {
  const marginLabel = 40 - Number(props.z) * 8 
  const margin = `mt-[${marginLabel}rem]`
  console.log(margin);
  
  return (
    // <div
    //   className={`absolute right-12 2xl:left-10 ${props.z} ${props.rotate} m-12 drop-shadow-xl`} // mudar esse css transition-all ease-in delay-150 duration-1000 hover:rotate-0 hover:z-30 hover:-right-[20rem] hover:drop-shadow-2xl hover:m-4 
    // >
      <div id="sheet" className={`absolute right-12 2xl:left-10 ${props.z} ${props.rotate} m-20 drop-shadow-xl bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem]`}>
        <div className="h-[43rem]">
          <h1 id="title-sheet-section" className="text-5xl text-stone-800 mt-10 mx-10 font-serif font-semibold">{props.section}</h1>
          <div id="content-sheet-section" className="h-full border-y-2 border-stone-800 mx-10">
            {"About" === props.section && <About/>}
            {"Skills" === props.section && <Skills/>}
            {"Experience" === props.section && <Experience/>}
          </div>
        </div>
      </div>
    // </div>
  );
}
