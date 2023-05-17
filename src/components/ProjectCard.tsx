import { ProjectCardProps } from "../projectsInfo"

export function ProjectCard({project}: ProjectCardProps) {
  const {image, name, alt, description, lenguages, libraries, demostration, repository} = project;

  return (
    <div className="bg-white overflow-hidden rounded-2xl my-5 drop-shadow-xl">
      <img src={ image } alt={ alt } />
      <div className="px-3">
        <h2 className="my-2 font-bold md:text-lg">{ name }</h2>
        <p className="line-clamp-6">{ description } </p>
        <div className="flex flex-row justify-center mt-5 space-x-5 font-bold">
          { lenguages.map((lenguage, index) => (
            <>
              { index > 0 && <p>|</p> }
              <div>{ lenguage }</div>
            </>
          ))}
        </div>
        <div className="flex flex-row justify-start mt-2 mb-5">
          <div className="flex flex-row justify-start pr-6 truncate">
            { libraries.map((library, index) => (
                index > 0 ? (
                  <div key={library}>{`, ${library}`}</div>
                ) : (
                  <div key={library}>{ library }</div> 
                )
            ))}
          </div>
          { libraries.length > 0 && <div>...</div> }

        </div>
        <div className="flex flex-row justify-around p-1 py-4 font-bold border-t-2 border-stone-800">
          <a href={demostration} aria-label="Demonstração">Demonstração</a>
          <a href={repository} aria-label="Repositório">Repositório</a>
        </div>
      </div>
    </div>
  )
}