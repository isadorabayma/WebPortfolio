import { CoffeeCard } from "./components/CoffeeCard";
import { Cv } from "./components/Cv";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css"
// import { Tablet } from "./components/Tablet";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-slate-400 h-screen relative before:absolute before:h-screen before:w-full before:bg-[url('https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg')] before:mix-blend-soft-light">
     {/* <div className="bg-slate-400 bg.image before:mix-blend-soft-light">
     <div className="bg-cover bg-center" style={{ backgroundImage: 'url(path/to/image.jpg)'
     <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg)' }}> */}
      <Header />
      <div className="w-full grid grid-cols-2">
        <div className="relative">
          <img
          src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg"
          className="w-2/3 h-[50rem] mt-16 object-cover absolute ring-2 ring-gray-900/5 z-10 drop-shadow-2xl"
          />
          <Cv color={"bg-stone-200"} z={1} rotate={"-rotate-2"}/>
          <Cv color={"bg-stone-200"} z={3} rotate={"-rotate-3"}/>
          <Cv color={"bg-stone-200"} z={2} rotate={"rotate-3"}/>
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
