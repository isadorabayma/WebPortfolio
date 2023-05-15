import { FileProps, SectionInfo } from "../filesInfo";
import "../styles/global.css";

export function Header({handleSection, sectionInfo}: FileProps) {
  return (
    <nav className="flex z-10 bg-[#ccc4c1]/80 justify-between sm:justify-end text-base h-12 px-10 space-x-6 border-2 border-b-[#615b54] text-stone-900">
      {sectionInfo.map(({name}, index) => (
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
