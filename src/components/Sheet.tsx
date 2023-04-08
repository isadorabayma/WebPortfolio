import { About } from "./About";
import { Expirence } from "./Expirence";
import { Skills } from "./Skills";

interface SheetProps {
  rotate: String;
  z: Number;
  content: String
}

export function Sheet(props: SheetProps) {
  return (
    <div
      className={`transition-all ease-in delay-150 duration-1000 absolute top-0 right-12 2xl:left-10 z-${props.z} drop-shadow-xl hover:drop-shadow-2xl w-[35rem] h-[50rem] m-16  hover:-right-[19rem] ${props.rotate} hover:rotate-0 hover:m-4 ring-1 ring-gray-900/5 bg-stone-200 hover:z-30`}
    >
      <div>
        {"About" === props.content && <About/>}
        {"Skills" === props.content && <Skills/>}
        {"Expirence" === props.content && <Expirence/>}
      </div>
    </div>
  );
}
