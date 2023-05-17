import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";
import { SectionInfo, initialSectionInfo, movedSectionInfo } from "./filesInfo";
import { useState } from "react";
import Desk from "./Images/concrete.png";
import KeyBoard from "./Images/keyboard.png";
import Plant from "./Images/tea5.png";
import Pen from "./Images/pen4.png";
import Pins from "./Images/pins2.png";

import "./styles/global.css";
import { CardContact } from "./components/CardContact";

function App() {
  const [sectionInfo, setSectionInfo] = useState<SectionInfo[]>(
    [ ...initialSectionInfo ]
  )
  const [tagClicked, setTagClicked] = useState<String | "">("")

  const handleSection = (sectionButton: String) => {
    // console.log("handleSection", sectionButton);
    
    setTagClicked((prevTagClicked) => {
      if(prevTagClicked === sectionButton){
        return ""
      } else {
        return sectionButton
      }
    })
  
    setSectionInfo((prevSectioInfo) => {
      return prevSectioInfo.map((section, index) => {
        const newSection = { ...section }
        // console.log(section.name, sectionButton);
        

        if(section.name !== sectionButton || section.name === tagClicked){
          newSection.z = initialSectionInfo[index].z;
          newSection.rotate = initialSectionInfo[index].rotate;
          newSection.right = initialSectionInfo[index].right;
          newSection.margin = initialSectionInfo[index].margin;
            
        } else if(section.name === sectionButton) {
          newSection.z = movedSectionInfo[index].z;
          newSection.rotate = movedSectionInfo[index].rotate;
          newSection.right = movedSectionInfo[index].right;
          newSection.margin = movedSectionInfo[index].margin;
        }
        return newSection
      })
    })
  };

  return (
    <div className="h-screen min-h-[950px] relative overflow-hidden">
      <img
          src={Desk}
          alt="Textura de concreto"
          className="absolute -z-20 object-cover h-full w-full"
          // onClick={() => handleSection("")}
        />
      <Header sectionInfo={sectionInfo} handleSection={handleSection} tagClicked={tagClicked}/>
      <div className="absolute -z-10 md:z-[5] -rotate-[30deg] -left-64 w-[58rem] -top-80 drop-shadow-3xl">
        <img
            src={KeyBoard}
            alt="teclado visto de cima"
            className="object-contain"
          />
      </div>
      <div className="absolute z-10 -rotate-[30deg] w-[15rem] -right-24 md:right-6 lg:right-96 top-32 md:top-20">
        <img
            src={Plant}
            alt="vasinho com suculenta"
            className="object-contain"
          />
      </div>
      <div id="shadow-plant" className="absolute z-[8] w-[15rem] h-[15rem] rounded-full -right-28 md:right-2 lg:right-[23rem] top-36 md:top-24 bg-black/50 blur-lg">
      </div>
      <div className="absolute z-10 rotate-[90deg] w-[15rem] -right-8 bottom-44 lg:right-32 lg:bottom-auto lg:top-20">
        <img
            src={Pins}
            alt="porta trecos de curtiça com clipes"
            className="invisible sm:visible object-contain"
          />
      </div>
      <div id="shadow-pins" className="invisible sm:visible absolute z-[8] w-[15rem] h-[15rem] rounded-full -right-12 bottom-40 lg:right-28 lg:bottom-auto lg:top-24 bg-black/50 blur-lg">
      </div>
      <div className="absolute z-20 -rotate-[25deg] w-20 left-[24rem] top-80 2xl:left-[44rem]">
        <img
            src={Pen}
            alt="lápis preto"
            className="object-cover"
          />
      </div>
      <div id="shadow-pen" className="absolute z-[18] -rotate-[25deg] w-7 h-[50rem] left-[29rem] top-[25rem] 2xl:left-[49rem] bg-black/70 blur-lg">
      </div>
      <Files sectionInfo={sectionInfo.slice(0,3)} handleSection={handleSection}/>
      <Tablet sectionInfo={sectionInfo} handleSection={handleSection}/>
      <Card sectionInfo={sectionInfo} handleSection={handleSection}/>
      <CardContact sectionInfo={sectionInfo} handleSection={handleSection}/>
    </div>
  );
}

export default App;
