import { useState } from "react";
import { Sheet } from "./Sheet";
import { Tag } from "./Tag";

export function Files() {
  const [isSheetHided, setIsSheetHided] = useState(true);

  const handleClick = () => {
    setIsSheetHided((prevIsSheetHided) => !prevIsSheetHided);
  };
  
  const sectionInfo = [
    {
      section: "About",
      z: "z-[3]",
      rotate: "-rotate-2",
      margin: "mt-[20rem]",
    },
    {
      section: "Skills",
      z: "z-[2]",
      rotate: "-rotate-1",
      margin: "mt-[28rem]",
    },
    {
      section: "Experience",
      z: "z-[1]",
      rotate: "rotate-1",
      margin: "mt-[36rem]",
    },
  ]

  return(
    <div className="relative">
      <div
        id="file-cover"
        className="absolute top-16 right-36 bg-stone-700 w-[35rem] h-[50rem] object-cover ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-md"
      ></div>
      <div id="sheets">
        {sectionInfo.map(({section, z, rotate, margin})=>(
          <Sheet margin={margin} z={z} section={section} rotate={rotate} />
        ))}
      </div>
      <div id="tags">
        {sectionInfo.map(({section, z, rotate, margin})=>(
          <Tag handleClick={handleClick} margin={margin} z={z} section={section} rotate={rotate} />
        ))}
      </div>
      {!isSheetHided && (
        <div>button is clicked</div>
      )}
    </div>
  )
}