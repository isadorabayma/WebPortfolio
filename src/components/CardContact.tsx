import "../styles/global.css";
import { EnvelopeOpen, MapPin, Phone } from "phosphor-react";
import { FileProps } from "../filesInfo";
import { AiFillGithub } from "react-icons/ai";

// 7 > 18

export function CardContact({handleSection, sectionInfo}: FileProps) {
  const CARD_INDEX = 4;
  const card = sectionInfo[CARD_INDEX];
  const {name, right, z} = card
  return (
    <div onClick={() => handleSection(name, CARD_INDEX)} className={ right }>
      <div id="shadow-card" className="absolute z-[8] h-[10rem] w-[17.6rem] rounded-md top-[18.5rem] right-7 md:right-40 lg:right-[34rem] md:top-[16rem] bg-black/50 blur-lg">
      </div>
      <div className="flex"> 
        <div className={`absolute ${z} top-72 right-10 md:right-44 lg:right-[35rem] md:top-[15rem]`}>
          <div className="bg-teal-800 h-[10.2rem] w-[17.8rem] rounded-md flex flex-col space-y-4 justify-center px-4 shadow-3xl ring-1 ring-teal-900/90">
            <div className="flex flex-col space-y-3 text-white text-base">
              <div className="flex flex-row space-x-2 text-lg">
                <Phone size={28}  />
                <h1>+55 21 99183-6383</h1>
              </div>
              <div className="flex flex-row space-x-2">
                <EnvelopeOpen size={28}  />
                <h1>isadora.bayma@gmail.com </h1>
              </div>
              <div className="flex flex-row space-x-2">
                <MapPin size={28}  />
                <h1>Rio de Janeiro - RJ, Brasil </h1>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
