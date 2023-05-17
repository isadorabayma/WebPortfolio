export interface FileProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  sectionInfo: SectionInfo[];
}

export interface HeaderProps {
  handleSection: (sectionButton: String, indexClicked: number) => void;
  sectionInfo: SectionInfo[];
  tagClicked: String;
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
      rotate: "top-[25rem] xl:top-[20rem] -rotate-[26deg]",
      margin: "-mt-[5rem] left-[11rem] xl:left-[29rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] xl:left-[0rem]",
    },
    {
      name: "Skills",
      z: "z-[2]",
      rotate: "top-[25rem] xl:top-[20rem] -rotate-[25deg]",
      margin: "mt-[1rem] sm:mt-[3rem] left-[14rem] sm:left-[15rem] xl:left-[33rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] xl:left-[0rem]",
    },
    {
      name: "Experience",
      z: "z-[1]",
      rotate: "top-[25rem] xl:top-[20rem] -rotate-[23deg]",
      margin: "mt-[7rem] sm:mt-[11rem] left-[17rem] sm:left-[19rem] xl:left-[37rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] xl:left-[0rem]",
    },
    {
      name: "Projects",
      z: "z-10",
      rotate: "-rotate-[10deg] md:-rotate-[20deg] lg:-rotate-[10deg]",
      margin: "mt-[30rem] md:mt-[18rem] lg:mt-[20rem] h-[34rem] w-[16rem] md:h-[49rem] md:w-[30rem]",
      right: "left-[1rem] md:left-auto md:-right-[12rem] lg:right-[3rem]",
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
    right: "top-[1rem] w-full max-w-[42rem] max-h-[60rem] right-0 lg:right-[14rem]",
  },
  {
    name: "Skills",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[9rem] lg:mt-[14rem] -right-[19rem] lg:right-[12rem]",
    right: "top-[1rem] w-full max-w-[42rem] max-h-[60rem] right-0 lg:right-[14rem]",
  },
  {
    name: "Experience",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-[17rem] lg:mt-[22rem] -right-[19rem] lg:right-[12rem]",
    right: "top-[1rem] w-full max-w-[42rem] max-h-[60rem] right-0 lg:right-[14rem]",
  },
  {
    name: "Projects",
    z: "z-30",
    rotate: "rotate-0",
    margin: "mt-2 lg:mt-6 h-[45rem] w-[21rem] md:h-[49rem] md:w-[30rem]",
    right: "left-3 lg:left-auto lg:right-5",
  },
  {
    name: "Contact",
    z: "z-30",
    rotate: "rotate-0",
    margin: "xxxx",
    right: "-left-[20rem] md:-left-[10rem]",
  },
]