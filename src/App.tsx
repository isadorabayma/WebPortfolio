import { CoffeeCard } from "./components/CoffeeCard";
import { Cv } from "./components/Cv";
import { Header } from "./components/Header";
import { Tablet } from "./components/Tablet";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-slate-400 relative before:absolute before:h-full before:w-full before:bg-[url('https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg')] before:mix-blend-soft-light">
      {/* <img
        src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg"
        className="h-full w-full object-cover absolute mix-blend-soft-light"
      /> */}
      <Header />
      <div className="w-full grid grid-cols-2">
        <div className="relative">
          <Cv color={"white"} top={1} rotate={"-rotate-2"}/>
          <Cv color={"red-400"} top={0} rotate={"-rotate-3"}/>
          <Cv color={"blue-400"} top={0} rotate={"rotate-1"}/>
        </div>
        <div>
          {/* <Tablet /> */}
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
