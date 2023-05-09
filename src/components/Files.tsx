import { FileProps } from "../filesInfo";
import { Sheet } from "./Sheet";
import { Tag } from "./Tag";
import CardTexture from "../Images/darkCardTexture.jpg";


export function Files({sectionInfo, handleSection}: FileProps) {
  return(
    <div className="relative">
      <div
        id="file-cover"
        className="absolute 
        top-[23rem] -right-[11rem] -rotate-[27deg]
        sm:top-64 sm:right-64 sm:-rotate-[24deg]
         w-[35rem] h-[50rem] ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-r-md"
      >
        <img
          src={CardTexture}
          alt="Foto de perfil da Isadora"
          className="absolute h-full object-cover"
        />
      </div>
      <div id="sheets">
        {sectionInfo.map(({name, z, rotate, right}, index)=>(
          <Sheet handleSection={handleSection} right={right} z={z} name={name} rotate={rotate} key={name} index={index}/>
        ))}
      </div>
      <div id="tags">
        {sectionInfo.map(({name, z, rotate, margin, right}, index)=>(
          <Tag handleSection={handleSection} right={right} margin={margin} z={z} name={name} rotate={rotate} key={name} index={index} />
        ))}
      </div>
    </div>
  )
}