interface TagProps {
  handleSection: (sectionButton: String) => void;
  name: String;
  z: string;
  rotate: String;
  margin: String;
  right: String;
  index: number;
}

export function Tag({handleSection, margin, z, rotate, name, index}: TagProps) {
  return (
    <button 
      id="tag-sheet"
      onClick={() => handleSection(name)}
      className={`absolute bg-stone-200 h-24 sm:h-32 w-8 sm:w-10 ${margin} rounded-r-md ${z} ${rotate} border-[1px] border-l-0 border-gray-400/60 p-3}`}
    >
      <div
        id="label-tag-sheet"
        className="-rotate-90 text-xs sm:text-base mt-10 sm:mt-14 border-t-2 w-10 border-gray-900"
      >
        { name }
      </div>
    </button>
  )
}