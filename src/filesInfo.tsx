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
      rotate: "top-[23rem] sm:top-64 -rotate-[26deg]",
      margin: "-mt-[5rem] sm:mt-[0rem] -right-[3rem] sm:right-[20rem]",
      right: "-right-[12rem] sm:right-[14rem]",
    },
    {
      name: "Skills",
      z: "z-[2]",
      rotate: "top-[23rem] sm:top-64 -rotate-[25deg]",
      margin: "mt-[1rem] sm:mt-[8rem] -right-[6rem] sm:right-[16rem]",
      right: "-right-[12rem] sm:right-[14rem]",
    },
    {
      name: "Experience",
      z: "z-[1]",
      rotate: "top-[23rem] sm:top-64 -rotate-[23deg]",
      margin: "mt-[7rem] sm:mt-[16rem] -right-[9rem] sm:right-[12rem]",
      right: "-right-[12rem] sm:right-[14rem]",
    },
    {
      name: "Projects",
      z: "z-10",
      rotate: "-rotate-[30deg] sm:-rotate-[5deg]",
      margin: "mt-96 sm:mt-56",
      right: "right-24 sm:right-[14rem]",
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
    margin: "mt-[6rem] right-[12rem]",
    right: "-right-20 sm:right-[14rem]",
  },
  {
    name: "Skills",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[14rem] right-[12rem]",
    right: "-right-20 sm:right-[14rem]",
  },
  {
    name: "Experience",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[22rem] right-[12rem]",
    right: "-right-20 sm:right-[14rem]",
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