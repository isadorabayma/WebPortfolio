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
      rotate: "top-[25rem] lg:top-[26rem] -rotate-[26deg]",
      margin: "-mt-[5rem] left-[11rem] lg:left-[29rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] lg:left-[0rem]",
    },
    {
      name: "Skills",
      z: "z-[2]",
      rotate: "top-[25rem] lg:top-[26rem] -rotate-[25deg]",
      margin: "mt-[1rem] sm:mt-[3rem] left-[14rem] sm:left-[15rem] lg:left-[33rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] lg:left-[0rem]",
    },
    {
      name: "Experience",
      z: "z-[1]",
      rotate: "top-[25rem] lg:top-[26rem] -rotate-[23deg]",
      margin: "mt-[7rem] sm:mt-[11rem] left-[17rem] sm:left-[19rem] lg:left-[37rem]",
      right: "w-[42rem] h-[60rem] -left-[18rem] lg:left-[0rem]",
    },
    {
      name: "Projects",
      z: "z-10",
      rotate: "-rotate-[15deg] md:-rotate-[20deg]",
      margin: "mt-[27rem] md:mt-[18rem] lg:mt-[15rem] h-[30rem] w-[14rem] md:h-[49rem] md:w-[30rem]",
      right: "left-[3rem] md:left-auto md:-right-[15rem] lg:-right-[8rem] xl:right-12",
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