import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";
import { SectionInfo, initialSectionInfo, movedSectionInfo } from "./filesInfo";
import { useState } from "react";
import Desk from "./Images/concrete.png";

import "./styles/global.css";
import { CardContact } from "./components/CardContact";
import { Click } from "./components/Click";
import { Objects } from "./components/Objects";

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
      <Files sectionInfo={sectionInfo.slice(0,3)} handleSection={handleSection}/>
      <Tablet sectionInfo={sectionInfo} handleSection={handleSection}/>
      <Card sectionInfo={sectionInfo} handleSection={handleSection}/>
      <CardContact sectionInfo={sectionInfo} handleSection={handleSection}/>
      <Objects/>
      <Click/>
    </div>
  );
}

export default App;
