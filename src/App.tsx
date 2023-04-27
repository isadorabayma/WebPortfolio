import { CoffeeCard } from "./components/CoffeeCard";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";
import { SectionInfo, initialSectionInfo } from "./filesInfo";
import { useState } from "react";

import "./styles/global.css";

function App() {
  const [sectionInfo, setSectionInfo] = useState<SectionInfo[]>(
    [ ...initialSectionInfo ]
  )
  const [tagClicked, setTagClicked] = useState<String | "">("")

  const handleSection = (sectionButton: String) => {
    setTagClicked((prevTagClicked) => {
      if(prevTagClicked === sectionButton){
        return ""
      } else {
        return sectionButton
      }
    })
  
    setSectionInfo((prevSectioInfo) => {
      return prevSectioInfo.map((section) => {
        const newSection = { ...section }
        if(section.name !== sectionButton || section.name === tagClicked){
          const initialSection = initialSectionInfo.find(obj => obj.name === section.name);
          if(initialSection){
            newSection.z = initialSection.z;
            newSection.rotate = initialSection.rotate;
            newSection.right = initialSection.right;
          } 
        } else {
          newSection.z = "z-30";     
          newSection.rotate = "rotate-0";   
          newSection.right = "-right-[22rem]";   
        }
        return newSection
      })
    })
  };

  return (
    <div className="bg-zinc-400/80 h-screen min-h-[950px] relative before:absolute before:h-screen before:w-full before:bg-[url('/Images/concrete.jpg')] before:mix-blend-soft-light overflow-hidden">
      <Header sectionInfo={sectionInfo} handleSection={handleSection}/>
      <div className="w-full grid grid-cols-2">
        <Files sectionInfo={sectionInfo} handleSection={handleSection}/>
        <div className="relative">
          <Tablet />
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
