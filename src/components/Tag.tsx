interface TagProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  name: String;
  z: string;
  rotate: String;
  margin: String;
  right: String;
  index: number;
}

export function Tag({handleSection, margin, z, rotate, name, right, index}: TagProps) {
  const rightChange = right ? right : "right-12"

  return (
    <button 
      id="tag-sheet"
      onClick={() => handleSection(name, index)}
      className={`absolute transition-all ease-in-out duration-1000 bg-stone-200 h-32 w-9 ${margin} rounded-r-md  ${rightChange} ${z} ${rotate} m-12 border-[1px] border-l-0 border-gray-300 p-3 hover:${!right && "w-[52px]"} hover:${!right && "right-8"} hover:${!right && "pl-8"}`}
    >
      <div
        id="label-tag-sheet"
        className="-rotate-90 mt-14 -ml-4 border-t-4 w-10 border-gray-900"
      >
        { name }
      </div>
    </button>
  )
}