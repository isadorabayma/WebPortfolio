import { CoffeeCard } from "./components/CoffeeCard";
import { Header } from "./components/Header";
import "./styles/tailwindcss.css";
import { Tablet } from "./components/Tablet";
import { Files } from "./components/Files";
import { SectionInfo, initialSectionInfo, movedSectionInfo } from "./filesInfo";
import { useState } from "react";

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
          console.log("if1", index);
          if(index < 3) {
            console.log("if2", index);
            newSection.z = initialSectionInfo[index].z;
            newSection.rotate = initialSectionInfo[index].rotate;
            newSection.right = initialSectionInfo[index].right;
          }
        } else {
          console.log("if3", index);
          newSection.z = movedSectionInfo[index].z;
          newSection.rotate = movedSectionInfo[index].rotate;
          newSection.right = movedSectionInfo[index].right;
        }
        return newSection
      })
    })
  };

  return (
    <div className="bg-zinc-400/80 h-screen min-h-[950px] relative before:absolute before:h-screen before:w-full before:bg-[url('/Images/concrete.jpg')] before:mix-blend-soft-light overflow-hidden">
      <Header sectionInfo={sectionInfo} handleSection={handleSection}/>
      <div className="w-full grid grid-cols-2">
        <Files sectionInfo={sectionInfo.slice(0,3)} handleSection={handleSection}/>
        <div className="relative">
          <Tablet />
          <CoffeeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
