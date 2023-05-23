import { HeaderProps } from "../filesInfo";
import "../styles/global.css";

export function Header({handleSection, sectionInfo, tagClicked}: HeaderProps) {
  return (
    <nav className="flex z-10 md:z-[-15] bg-[#d7dadf]/70 md:bg-[#d7dadf]/0 justify-center sm:justify-end text-sm sm:text-base h-12 px-2 sm:px-10 space-x-4 sm:space-x-6 border-b-2 border-b-stone-800 text-stone-900">
      {sectionInfo.map(({name}) => (
        name === tagClicked ? 
        <button
        className="z-10 hover:text-lg border-b-4 border-b-stone-900 my-2"
        onClick={() => handleSection(name)}
        key={name}
      >
        {name}
      </button>
      :
      <button
          className="z-10 hover:text-lg"
          onClick={() => handleSection(name)}
          key={name}
        >
          {name}
        </button>
        
      ))}
    </nav>
  );
}
