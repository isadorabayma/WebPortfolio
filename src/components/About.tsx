import Perfil from "../Images/perfil.jpg";

export function About() {
  return(
    <div className="h-[43rem]">
      <h1 className="text-5xl text-stone-800 mt-10 mx-10 font-serif font-semibold">About</h1>
      <div className="h-full border-y-2 border-stone-800 mx-10 flex flex-row">
        <img
          src={Perfil}
          alt="Foto de perfil da Isadora"
          className="my-10 pr-5 -ml-10 h-96 w-60 object-cover object-righ grayscale-[45%]"
        />
        <div className="flex items-end">
          <span className="pb-10 pl-0 text-base text-justif w-full indent-8 font-mono">
            Desenvolvedora Fullstack apaixonada por desafios e resolução de problemas. Formada em arquitetura, amante da matemática e da lógica desde pequena, me reencontrei no desenvolvimento de software e tenho adorado o mundo dos novos desafios digitais. Acredito muito no poder transformador da área de tecnologia desejo me desenvolver cada vez mais nessa área para poder fazer parte dessas mudanças.
          </span>
        </div>
      </div>
    </div>
  )
}