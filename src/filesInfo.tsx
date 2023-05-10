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
      rotate: "top-[25rem] sm:top-[23rem] -rotate-[26deg]",
      margin: "-mt-[5rem] -right-[3rem] sm:-right-[4rem]",
      right: "-right-[14rem]",
    },
    {
      name: "Skills",
      z: "z-[2]",
      rotate: "top-[25rem] sm:top-[23rem] -rotate-[25deg]",
      margin: "mt-[1rem] sm:mt-[3rem] -right-[6rem] sm:-right-[8rem]",
      right: "-right-[14rem]",
    },
    {
      name: "Experience",
      z: "z-[1]",
      rotate: "top-[25rem] sm:top-[23rem] -rotate-[23deg]",
      margin: "mt-[7rem] sm:mt-[11rem] -right-[9rem] sm:-right-[12rem]",
      right: "-right-[14rem]",
    },
    {
      name: "Projects",
      z: "z-10",
      rotate: "-rotate-[30deg] md:-rotate-[20deg] lg:-rotate-[5deg]",
      margin: "mt-[25rem] md:mt-[28rem] h-[30rem] w-[14rem] md:h-[49rem] md:w-[30rem]",
      right: "left-16 sm:left-44 md:left-24 lg:left-auto lg:right-[2rem]",
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
    margin: "mt-[1rem] lg:mt-[6rem] -right-[19rem] lg:right-[12rem]",
    right: "-right-[17rem] lg:right-[14rem]",
  },
  {
    name: "Skills",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[9rem] lg:mt-[14rem] -right-[19rem] lg:right-[12rem]",
    right: "-right-[17rem] lg:right-[14rem]",
  },
  {
    name: "Experience",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[17rem] lg:mt-[22rem] -right-[19rem] lg:right-[12rem]",
    right: "-right-[17rem] lg:right-[14rem]",
  },
  {
    name: "Projects",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-6 lg:mt-6 h-[45rem] w-[21rem] sm:h-[35rem] sm:w-[50rem]",
    right: "left-1",
  },
  {
    name: "Contact",
    z: "z-30",
    rotate: "rotate-0",
    margin: "xxxx",
    right: "-left-[20rem] md:-left-[10rem]",
  },
]