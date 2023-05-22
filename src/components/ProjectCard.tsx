import { ProjectCardProps } from "../projectsInfo"

export function ProjectCard({project}: ProjectCardProps) {
  const {image, name, alt, description, lenguages, libraries, demostration, repository} = project;
  const demoIsDisable = project.demostration === "" ? "text-stone-500 cursor-not-allowed" : "";

  return (
    <div className="bg-white overflow-hidden rounded-2xl my-5 drop-shadow-xl">
      <img src={ image } alt={ alt } />
      <div className="px-3 md:px-7">
        <h2 className="mt-6 mb-2 font-bold text-xl">{ name }</h2>
        <p className="text-justify">{ description } </p>
        <div className="flex flex-wrap justify-center mt-5 space-x-5 font-bold">
          { lenguages.map((lenguage, index) => (
            <>
              { index > 0 && <p>|</p> }
              <div>{ lenguage }</div>
            </>
          ))}
        </div>
        <div className="flex flex-wrap justify-start space-x-1 mt-2 mb-5">
          { libraries.map((library, index) => (
              index !== (libraries.length - 1) ? (
                <div key={library}>{`${library},`}</div>
              ) : (
                <div key={library}>{`${library}.`}</div> 
              )
          ))}
        </div>
        <div className="flex flex-row justify-around p-1 py-4 font-bold border-t-2 border-stone-800">
          <a className={demoIsDisable} href={demostration} aria-label="Demonstração">Demonstração</a>
          <a href={repository} aria-label="Repositório">Repositório</a>
        </div>
      </div>
    </div>
  )
}