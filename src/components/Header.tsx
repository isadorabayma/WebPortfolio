import { FileProps, SectionInfo } from "../filesInfo";
import "../styles/global.css";

export function Header({handleSection, sectionInfo}: FileProps) {
  return (
    <nav className="flex  justify-center sm:justify-end p-3 pr-10 space-x-3 border-2 border-b-neutral-800 text-stone-800 text-xl text-">
      {sectionInfo.map(({name}, index) => (
        <button
          className="z-10"
          onClick={() => handleSection(name, index)}
          key={name}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}
