import { HeaderProps } from "../filesInfo";
import "../styles/global.css";

export function Header({handleSection, sectionInfo, tagClicked}: HeaderProps) {
  return (
    <nav className="flex z-10 bg-[#ccc4c1]/80 justify-center sm:justify-end text-sm sm:text-base h-12 px-2 sm:px-10 space-x-4 sm:space-x-6 border-b-2 border-b-[#615b54] text-stone-900">
      {sectionInfo.map(({name}, index) => (
        name === tagClicked ? 
        <button
        className="z-10 hover:text-lg border-b-4 border-b-[#615b54] my-2"
        onClick={() => handleSection(name, index)}
        key={name}
      >
        {name}
      </button>
      :
      <button
          className="z-10 hover:text-lg"
          onClick={() => handleSection(name, index)}
          key={name}
        >
          {name}
        </button>
        
      ))}
    </nav>
  );
}
