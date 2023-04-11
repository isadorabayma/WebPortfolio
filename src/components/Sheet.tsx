import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

interface SheetProps {
  rotate: String;
  z: string;
  content: String;
  margin: String
}

export function Sheet(props: SheetProps) {
  const marginLabel = 40 - Number(props.z) * 8 
  const margin = `mt-[${marginLabel}rem]`
  console.log(margin);

  function handleClick() {
    // escrever aqui uma função para colocar um novo css na folha
  };
  
  return (
    <>
      <div
        className={`transition-all ease-in delay-150 duration-1000 absolute right-12 2xl:left-10 ${props.z} hover:-right-[19rem] ${props.rotate} hover:rotate-0 m-16 hover:m-4 hover:z-30 flex flex-row drop-shadow-xl hover:drop-shadow-2xl`} // mudar esse css
      >
        <div className="bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem] ">
          <div>
            {"About" === props.content && <About/>}
            {"Skills" === props.content && <Skills/>}
            {"Experience" === props.content && <Experience/>}
          </div>
        </div>
        <button onClick={handleClick} className={`bg-stone-200 h-32 w-6 ${props.margin} rounded-r-md`}>
          <div className="-rotate-90 mt-14 -ml-4 border-t-4 w-10 border-gray-900">
            { props.content }
            {/* colocar a borda só depois de clicar */}
          </div>
        </button>
      </div>
    </>
  );
}
