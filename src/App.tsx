import { CoffeeCard } from "./components/CoffeeCard";
import { Sheet } from "./components/Sheet";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-slate-400 h-screen relative before:absolute before:h-screen before:w-full before:bg-[url('/Images/concrete.jpg')] before:mix-blend-soft-light">
      <Header />
      <div className="w-full grid grid-cols-2">
        <div className="relative">
          <div className="absolute top-16 right-44 2xl:left-10 
           bg-stone-700 w-[35rem] h-[50rem] object-cover ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-md"></div>
          <Sheet margin={"mt-[20rem]"} z={"z-30"} content={"About"} rotate={"-rotate-3"} />
          <Sheet margin={"mt-[28rem]"} z={"z-3"} content={"Skills"} rotate={"-rotate-2"} />
          <Sheet margin={"mt-[36rem]"} z={"z-2"} content={"Experience"} rotate={"rotate-1"} />
        </div>
        <div className="relative">
          <Tablet />
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
