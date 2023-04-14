import { useState } from "react";
import { Sheet } from "./Sheet";
import { Tag } from "./Tag";

interface SectionInfo {
  name: string;
  z: string;
  rotate: string;
  margin: string;
}

export function Files() {
  const initialSectionInfo = [
    {
      name: "About",
      z: "z-[3]",
      rotate: "-rotate-2",
      margin: "mt-[20rem]",
    },
    {
      name: "Skills",
      z: "z-[2]",
      rotate: "-rotate-1",
      margin: "mt-[28rem]",
    },
    {
      name: "Experience",
      z: "z-[1]",
      rotate: "rotate-1",
      margin: "mt-[36rem]",
    },
  ]

  const [sectionInfo, setSectionInfo] = useState<SectionInfo[]>(
    [ ...initialSectionInfo ]
  )
  const [tagClicked, setTagClicked] = useState("")

  const handleClick = (sectionButton: String) => {
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
            newSection.z = initialSection.z
          } 
        } else {
          newSection.z = "z-30"      
        }
        return newSection
      })
    })
  };

  return(
    <div className="relative">
      <div
        id="file-cover"
        className="absolute top-16 right-36 bg-stone-700 w-[35rem] h-[50rem] object-cover ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-md"
      ></div>
      <div id="sheets">
        {sectionInfo.map(({name, z, rotate, margin})=>(
          <Sheet margin={margin} z={z} name={name} rotate={rotate} />
        ))}
      </div>
      <div id="tags">
        {sectionInfo.map(({name, z, rotate, margin})=>(
          <Tag handleClick={handleClick} margin={margin} z={z} name={name} rotate={rotate} />
        ))}
      </div>
    </div>
  )
}