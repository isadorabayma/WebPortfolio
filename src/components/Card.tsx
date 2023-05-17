import "../styles/global.css";
import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "phosphor-react";
import { FileProps } from "../filesInfo";

export function Card({handleSection, sectionInfo}: FileProps) {
  const CARD_INDEX = 4;
  const card = sectionInfo[CARD_INDEX];
  const {name, right, z} = card
  return (
    <div onClick={() => handleSection(name, CARD_INDEX)}>
      <div className="flex"> 
        <div className={`absolute transition-all ease-in-out duration-700 ${z} top-40 right-10`}>
          <div className="bg-teal-800 h-[10.2rem] w-[17.8rem] rounded-sm flex flex-col space-y-6 justify-center px-5">
            <div className="">
              <h1 className="text-2xl text-white">Isadora Bayma</h1>
              <h2 className="text-gray-300">Desenvolvedora Fullstack</h2>
            </div>
            <div className="flex flex-row space-x-2">
              <a
                href="https://www.linkedin.com/in/isadora-bayma/"
                aria-label="Linkedin profile"
              >
                <LinkedinLogo size={38} weight="fill" className="text-white" />
              </a>
              <a
                href="https://github.com/isadorabayma"
                aria-label="Linkedin profile"
              >
                <GithubLogo size={38} weight="fill" className="text-white" />
              </a>
              <EnvelopeOpen size={38} weight="fill" className="text-white" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
