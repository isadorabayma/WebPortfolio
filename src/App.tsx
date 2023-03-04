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
      <h1 className="text-black text-6xl font-bold p-24">Isadora Bayma</h1>
      <div className="bg-yellow-100 h-90 w-90 p-24">
        <div className="bg-blue-400 h-15 w-15"></div>
      </div>
    </div>
  );
}

export default App;
