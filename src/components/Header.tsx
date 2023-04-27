import { SectionInfo } from "../filesInfo";
import "../styles/global.css";

export interface HeaderProps {
  handleSection: (sectionButton: String) => void;
  sectionInfo: SectionInfo[];
}

export function Header({handleSection, sectionInfo}: HeaderProps) {
  return (
    <nav className="flex  justify-center sm:justify-end p-3 pr-10 space-x-3 border-2 border-b-neutral-800 text-stone-800 text-xl text-">
      {sectionInfo.map(({name}) => (
        <button
          className=""
          onClick={() => handleSection(name)}
        >
          {name}
        </button>
      ))}
      <h1>Projects</h1>
      <h1>Contact</h1>
    </nav>
  );
}
