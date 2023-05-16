import { CoffeeCard } from "./components/CoffeeCard";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";
import { SectionInfo, initialSectionInfo, movedSectionInfo } from "./filesInfo";
import { useState } from "react";
import Desk from "./Images/deskBase.png";


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
          alt="Foto de perfil da Isadora"
          className="absolute -z-10 object-none h-full w-full object-left-top"
        />
      <Header sectionInfo={sectionInfo} handleSection={handleSection} tagClicked={tagClicked}/>
      <Files sectionInfo={sectionInfo.slice(0,3)} handleSection={handleSection}/>
      <Tablet sectionInfo={sectionInfo} handleSection={handleSection}/>
      <CoffeeCard sectionInfo={sectionInfo} handleSection={handleSection}/>
    </div>
  );
}

export default App;
