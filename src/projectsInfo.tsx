import Portfolio from "./Images/Projects/portfolio.png"

export interface ProjectType {
  image: string;
  name: string;
  alt: string;
  description: string;
  lenguages: string[];
  libraries: string[];
  demostration: string;
  repository: string;
}

export interface ProjectCardProps {
  project: ProjectType
}

export const projectsInfo: ProjectType[] = [
  {
  image: Portfolio,
  name: "Portfólio",
  alt: "Imagem de home do site do portfólio",
  description: "Esse site foi desenvolvido afim de mimetizar uma mesa de trabalho física. O desafio de organizar de forma livre os objetos na mesa foi concretizado usando as referencias de absolutas da pagina cuidadosamente pensado para cada media query. A maioria das informações está sendo disponobilizada em arrays de objetos para que seja mais facil a migração para um banco de dados assim que se fizer nescessário.",
  lenguages: [ "Typescript", "Html", "CSS"],
  libraries: [  "React", "Vite", "Tailwind", "phosphor-react", "react-icons", "vercel" ],
  demostration: "https://isadora-bayma.vercel.app",
  repository: "https://github.com/isadorabayma/WebPortfolio"
  }
]