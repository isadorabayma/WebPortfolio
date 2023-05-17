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
        top-[26rem] xl:top-[20rem] -left-[21rem] xl:-left-16 -rotate-[27deg]
         w-[45rem] h-[60rem] ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-r-md shadow-3xl"
      >
        <img
          src={CardTexture}
          alt="Foto de perfil da Isadora"
          className="absolute h-full w-full object-cover rounded-r-md"
        />
      </div>
      <div id="shadow-file" className="absolute z-[0.5] top-[26rem] xl:top-[22rem] -left-[19rem] xl:-left-10 -rotate-[27deg]
         w-[45rem] h-[60rem] bg-black/70 blur-2xl">
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