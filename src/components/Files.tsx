import { Sheet } from "./Sheet";
import { Tag } from "./Tag";

export function Files() {
  // function handleClick() {
  //   
  // alguma coisa vai errado com as tags apartir do 2xl
  // };
  const sectionInfo = [
    {
      section: "About",
      z: "z-3",
      rotate: "-rotate-2",
      margin: "mt-[20rem]",
    },
    {
      section: "Skills",
      z: "z-30",
      rotate: "-rotate-1",
      margin: "mt-[28rem]",
    },
    {
      section: "Experience",
      z: "z-1",
      rotate: "rotate-1",
      margin: "mt-[36rem]",
    },
  ]

  return(
    <div className="relative">
      <div
        id="file-cover"
        className="absolute top-16 right-36 2xl:left- bg-stone-700 w-[35rem] h-[50rem] object-cover ring-2 ring-gray-900/10 z-10 drop-shadow-2xl rounded-md"
      ></div>
      <div id="sheets">
        {sectionInfo.map(({section, z, rotate, margin})=>(
          <Sheet margin={margin} z={z} section={section} rotate={rotate} />
        ))}
      </div>
      <div id="tags">
        {sectionInfo.map(({section, z, rotate, margin})=>(
          <Tag margin={margin} z={z} section={section} rotate={rotate} />
        ))}
      </div>
      {/* <Sheet margin={"mt-[20rem]"} z={"z-3"} section={"About"} rotate={"-rotate-2"} />
      <Tag margin={"mt-[20rem]"} z={"z-3"} section={"About"} rotate={"-rotate-2"}/>

      <Sheet margin={"mt-[28rem]"} z={"z-30"} section={"Skills"} rotate={"-rotate-1"} />
      <Sheet margin={"mt-[36rem]"} z={"z-1"} section={"Experience"} rotate={"rotate-1"} /> */}
    </div>
  )
}