import "../styles/global.css";
import coffee from "../Images/coffee.png";
import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "phosphor-react";

export function CoffeeCard() {
  return (
    <div className="h-15 w-15 p-24 flex place-content-end">
      <div className="pt-36 pr-12 absolute">
        <div className="bg-teal-900 h-28 w-[33rem] hover:w-[55rem] rounded-lg place-self-end pt-6 pl-8 flex flex-row space-x-6">
          <div>
            <h1 className="text-4xl text-white">Isadora Bayma</h1>
            <h2 className="text-gray-300">Desenvolvedora Fullstack</h2>
          </div>
          <h1 className="text-4xl text-white">|</h1>
          <a href="https://www.linkedin.com/in/isadora-bayma/" aria-label="Linkedin profile">
            <LinkedinLogo size={48} weight="fill" className="text-white" />
          </a>
          <a href="https://github.com/isadorabayma" aria-label="Linkedin profile">
            <GithubLogo size={48} weight="fill" className="text-white"/>
          </a>
          <EnvelopeOpen size={48} weight="fill" className="text-white"/>
        </div>
      </div>
      <img
        src={coffee}
        alt=""
        className="rotate-[38deg] hover:rotate-45 h-72 place-self-center drop-shadow-2xl"
      />
    </div>
  );
}
