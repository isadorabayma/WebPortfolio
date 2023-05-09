interface TagProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  name: String;
  z: string;
  rotate: String;
  margin: String;
  right: String;
  index: number;
}

export function Tag({handleSection, margin, z, rotate, name, index}: TagProps) {
  // const rightChange = right ? right : "right-0"
  // hover:${!right && "w-[52px]"} hover:${!right && "right-8"} hover:${!right && "pl-8"

  return (
    <button 
      id="tag-sheet"
      onClick={() => handleSection(name, index)}
      className={`absolute transition-all ease-in-out duration-1000 bg-stone-200 h-32 w-10 ${margin} rounded-r-md ${z} ${rotate} border-[1px] border-l-0 border-gray-400/60 p-3}`}
    >
      <div
        id="label-tag-sheet"
        className="-rotate-90 mt-14 border-t-2 w-10 border-gray-900"
      >
        { name }
      </div>
    </button>
  )
}