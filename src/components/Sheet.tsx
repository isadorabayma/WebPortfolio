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
        className={`transition-all ease-in delay-150 duration-1000 absolute right-12 2xl:left-10 ${props.z} hover:-right-[20rem] ${props.rotate} hover:rotate-0 m-16 hover:m-4 hover:z-30 flex flex-row drop-shadow-xl hover:drop-shadow-2xl`} // mudar esse css
      >
        <div className="bg-stone-200 ring-1 ring-gray-900/10 w-[35rem] h-[50rem] ">
          <div className="h-[43rem]">
            <h1 className="text-5xl text-stone-800 mt-10 mx-10 font-serif font-semibold">{props.content}</h1>
            <div className="h-full border-y-2 border-stone-800 mx-10">
              {"About" === props.content && <About/>}
              {"Skills" === props.content && <Skills/>}
              {"Experience" === props.content && <Experience/>}
            </div>
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
