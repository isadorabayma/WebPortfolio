interface TagProps {
  handleClick: (sectionButton: String) => void;
  name: String;
  z: string;
  rotate: String;
  margin: String;
  right: String;
}

// hover:${!right && "w-[52px]"} hover:${!right && "right-8"} hover:${!right && "pl-8"}
// hover:w-[52px] hover:right-8 hover:pl-8

export function Tag({handleClick, margin, z, rotate, name, right}: TagProps) {
  return (
    <button 
      id="tag-sheet"
      onClick={() => handleClick(name)}
      className={`absolute bg-stone-200 h-32 w-9 ${margin} rounded-r-md  ${right} right-12 ${z} ${rotate} m-12 border-[1px] border-l-0 border-gray-300 p-3 hover:${!right && "w-[52px]"} hover:${!right && "right-8"} hover:${!right && "pl-8"}`}
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