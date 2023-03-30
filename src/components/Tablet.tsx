export function Tablet() {
  return (
    <div className="relative">
      <div className="absolute z-10 drop-shadow-md hover:drop-shadow-xl h-[35rem] w-[50rem] bg-black rounded-2xl ml-14 mt-16 p-[2rem] ring-1 ring-gray-900/5">
        <div className="bg-white h-[31rem] w-[43rem] border-2 border-slate-500"></div>
      </div>
      <div className="absolute z-5 blur-sm drop-shadow-lg hover:drop-shadow-xl h-[35rem] w-[50rem] bg-slate-700/70 rounded-2xl ml-[80px] mt-[80px] p-[2rem] ring-1 ring-gray-900/5"></div>
    </div>
  );
}
