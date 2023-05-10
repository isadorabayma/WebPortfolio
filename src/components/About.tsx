import Perfil from "../Images/perfil.jpg";

export function About() {
  return(
    <div className="h-full flex flex-col">
      <div className="h-80 sm:h-96 py-4 sm:py-7 flex flex-row">
        <div className="w-64 sm:w-28 bg-stone-300"></div>
        <img
          src={Perfil}
          alt="Foto de perfil da Isadora"
          className="px-3 w-60 object-cover grayscale-[45%]"
        />
        <div className="w-full bg-stone-300"></div>
      </div>
      <div className="flex items-end">
        <span className="pb-10 text-base sm:text-lg w-full text-justify font-sans">
        Isadora é arquiteta de formação (PUC-Rio, 2017) e migrou para a área de desenvolvimento web (Trybe, 2022), trazendo consigo habilidades em gerenciamento de projetos, resolução de problemas e atenção aos detalhes. Com competências em lógica e matemática desde cedo, foi contemplada com uma bolsa de iniciação científica e mestrado (IMPA, 2011) e está ansiosa por trabalhar em novos desafios e projetos, oferecendo soluções eficientes para as necessidades de seus clientes. Sua paixão por inovação e excelência a tornam uma profissional valiosa na área de desenvolvimento web.
        </span>
      </div>
    </div>
  )
}