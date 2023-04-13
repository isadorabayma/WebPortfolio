import { CoffeeCard } from "./components/CoffeeCard";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-slate-400 h-screen relative before:absolute before:h-screen before:w-full before:bg-[url('/Images/concrete.jpg')] before:mix-blend-soft-light">
      <Header />
      <div className="w-full grid grid-cols-2">
        <Files/>
        <div className="relative">
          <Tablet />
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
