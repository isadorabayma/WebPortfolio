export interface FileProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  sectionInfo: SectionInfo[];
}

export interface SheetProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  name: String;
  z: string;
  rotate: String;
  right: String;
  index: number;
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

export const movedSectionInfo: SectionInfo[] = [
  {
    name: "About",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[7rem]",
    right: "-right-[22rem]",
  },
  {
    name: "Skills",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[7rem]",
    right: "-right-[22rem]",
  },
  {
    name: "Experience",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[7rem]",
    right: "-right-[22rem]",
  },
  {
    name: "Projects",
    z: "z-30",
    rotate: "rotate-0",
    margin: "xxxx",
    right: "xxxx",
  },
  {
    name: "Contact",
    z: "z-30",
    rotate: "rotate-0",
    margin: "xxxx",
    right: "xxxx",
  },
]