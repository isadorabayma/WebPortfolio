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
import Tea from "./Images/tea7.png";
import Pins from "./Images/pins2.png";

import "./styles/global.css";

function App() {
  const [sectionInfo, setSectionInfo] = useState<SectionInfo[]>(
    [ ...initialSectionInfo ]
  )
  const [tagClicked, setTagClicked] = useState<String | "">("")

  const handleSection = (sectionButton: String) => {
    console.log("handleSection", sectionButton);
    
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
        />
      <Header sectionInfo={sectionInfo} handleSection={handleSection} tagClicked={tagClicked}/>
      <div className="absolute -z-10 -rotate-[30deg] -left-64 w-[58rem] -top-80">
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
      <div className="absolute z-10 rotate-[90deg] w-[18rem] -right-12 bottom-44">
        <img
            src={Tea}
            alt="xicara de chá"
            className="invisible xx:visible object-contain"
          />
      </div>
      <div className="absolute z-10 rotate-[90deg] w-[15rem] -right-8 bottom-44 lg:right-32 lg:bottom-auto lg:top-20">
        <img
            src={Pins}
            alt="porta trecos de curtiça com clipes"
            className="invisible sm:visible object-contain"
          />
      </div>
      <div className="absolute z-20 -rotate-[25deg] w-20 left-[24rem] sm:left-96 top-80 2xl:left-[44rem]">
        <img
            src={Pen}
            alt="lápis preto"
            className="object-cover"
          />
      </div>
      <Files sectionInfo={sectionInfo.slice(0,3)} handleSection={handleSection}/>
      <Tablet sectionInfo={sectionInfo} handleSection={handleSection}/>
      <Card sectionInfo={sectionInfo} handleSection={handleSection}/>
    </div>
  );
}

export default App;
