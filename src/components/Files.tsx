import { FileProps } from "../filesInfo";
import { Sheet } from "./Sheet";
import { Tag } from "./Tag";

export function Files({sectionInfo, handleClick}: FileProps) {
  return(
    <div className="relative">
      <div
        id="file-cover"
        className="absolute top-16 right-36 bg-stone-700 w-[35rem] h-[50rem] object-cover ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-r-md"
      ></div>
      <div id="sheets">
        {sectionInfo.map(({name, z, rotate, right})=>(
          <Sheet handleClick={handleClick} right={right} z={z} name={name} rotate={rotate} key={name}/>
        ))}
      </div>
      <div id="tags">
        {sectionInfo.map(({name, z, rotate, margin, right})=>(
          <Tag handleClick={handleClick} right={right} margin={margin} z={z} name={name} rotate={rotate} key={name}/>
        ))}
      </div>
    </div>
  )
}