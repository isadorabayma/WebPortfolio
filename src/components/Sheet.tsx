import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

interface SheetProps {
  rotate: String;
  z: Number;
  content: String;
  margin: String
}

export function Sheet(props: SheetProps) {
  // const marginLabel = 40 - Number(props.z) * 6 
  // const margin = `mt-[${marginLabel}rem]`
  // console.log(margin);
  
  return (
    <>
      <div
        className={`transition-all ease-in delay-150 duration-1000 absolute right-12 2xl:left-10 z-${props.z} hover:-right-[19rem] ${props.rotate} hover:rotate-0 m-16 hover:m-4 hover:z-30 flex flex-row `}
      >
        <div className="bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem] drop-shadow-xl hover:drop-shadow-2xl">
          <div>
            {"About" === props.content && <About/>}
            {"Skills" === props.content && <Skills/>}
            {"Experience" === props.content && <Experience/>}
          </div>
        </div>
        <div className={`bg-stone-200 ring-1 ring-gray-900/10 h-32 w-10 drop-shadow-xl hover:drop-shadow-2xl ${props.margin}`}>
          <div className="-rotate-90 mt-20">
            { props.content }
          </div>
        </div>
      </div>
    </>
  );
}
