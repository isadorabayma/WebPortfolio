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
      z: "z-10",
      rotate: "rotate-6",
      margin: "mt-56 lg:mt-16",
      right: "",
    },
    {
      name: "Contact",      
      z: "z-1",
      rotate: "",
      margin: "",
      right: "-left-16 sm:left-10 md:left-24 xl:left-40 ",
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
    margin: "mt-6 lg:mt-6",
    right: "-right-[1.5rem]",
  },
  {
    name: "Contact",
    z: "z-30",
    rotate: "rotate-0",
    margin: "xxxx",
    right: "-left-[20rem] md:-left-[10rem]",
  },
]