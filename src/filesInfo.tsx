export interface FileProps {
  handleSection: (sectionButton: String) => void;
  sectionInfo: SectionInfo[];
}

export interface SheetProps {
  handleSection: (sectionButton: String) => void;
  name: String;
  z: string;
  rotate: String;
  right: String;
}

export interface SectionInfo {
  name: string;
  z: string;
  rotate: string;
  margin: string;
  right: string;
}

export const initialSectionInfo: SectionInfo[] = [
    {
      name: "About",
      z: "z-[3]",
      rotate: "-rotate-2",
      margin: "mt-[7rem]",
      right: "",
    },
    {
      name: "Skills",
      z: "z-[1]",
      rotate: "-rotate-1",
      margin: "mt-[16rem]",
      right: "",
    },
    {
      name: "Experience",
      z: "z-[2]",
      rotate: "rotate-1",
      margin: "mt-[25rem]",
      right: "",
    },
    {
      name: "Projects",
      z: "",
      rotate: "",
      margin: "",
      right: "",
    },
    {
      name: "Contact",
      z: "",
      rotate: "",
      margin: "",
      right: "",
    },
  ]