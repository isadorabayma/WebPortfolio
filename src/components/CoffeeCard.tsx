import "../styles/global.css";
import coffee from "../Images/coffee.png";
import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "phosphor-react";

export function CoffeeCard() {
  return (
    <div>
      <div className="flex lg:pt-[40rem]">
        <div className="absolute transition-all ease-in-out duration-700 -left-10 sm:left-10 md:left-24 xl:left-40 hover:-left-[20rem] md:hover:-left-[10rem] pt-8 lg:pt-28 lg:pr-[40px]">
          <div className="bg-teal-800 h-[9rem] w-[33rem] rounded-md place-self-end pl-8 flex flex-row space-x-6">
            <div className="my-auto flex flex-row space-x-5">
              <div>
                <h1 className="text-4xl text-white">Isadora Bayma</h1>
                <h2 className="text-gray-300">Desenvolvedora Fullstack</h2>
              </div>
              <h1 className="text-4xl text-white">|</h1>
              <a
                href="https://www.linkedin.com/in/isadora-bayma/"
                aria-label="Linkedin profile"
              >
                <LinkedinLogo size={48} weight="fill" className="text-white" />
              </a>
              <a
                href="https://github.com/isadorabayma"
                aria-label="Linkedin profile"
              >
                <GithubLogo size={48} weight="fill" className="text-white" />
              </a>
              <EnvelopeOpen size={48} weight="fill" className="text-white" />
            </div>
          </div>
        </div>
        <img
          src={coffee}
          alt=""
          className="invisible lg:visible rotate-[38deg] hover:rotate-45 h-72 drop-shadow-2xl ml-[20rem] xl:ml-[24rem] sxl:ml-[30rem]"
        />
      </div>
    </div>
  );
}
