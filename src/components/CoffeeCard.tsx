import "../styles/global.css";
import coffee from '../Images/coffee.png'


export function CoffeeCard() {
  return (
    <div className="h-15 w-15 p-24 flex place-content-end">
        <div className="pt-36 pr-48 absolute">
          <div className="bg-teal-900 h-32 w-72 hover:w-[50rem] rounded-lg place-self-end p-6 flex-row">
            <div>
              <h1 className="text-4xl text-white">Isadora Bayma</h1>
              <h2 className="text-gray-300">Desenvolvedora Fullstack</h2>
            </div>
          </div>
        </div>
        <img src={coffee} alt="" className="rotate-[38deg] hover:rotate-45 h-72 place-self-center drop-shadow-2xl"/>

      </div>
  );
}
