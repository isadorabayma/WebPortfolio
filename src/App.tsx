import { CoffeeCard } from "./components/CoffeeCard";
import { Cv } from "./components/Cv";
import { Header } from "./components/Header";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-slate-400 h-full w-full absolute">
      <img
        src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg"
        className="h-full w-full object-cover absolute mix-blend-soft-light"
      />
      <Header />
      <div className="w-full grid grid-cols-2">
        <div>
          <Cv />
        </div>
        <div>
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
