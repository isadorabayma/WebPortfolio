import Perfil from "../Images/perfil.jpg"

export function Cv() {
  return (
    <div className="drop-shadow-md hover:drop-shadow-xl w-2/3 h-5/6 m-16 -rotate-2 bg-white/75">
      {/* <img
        src="https://cdn.pixabay.com/photo/2016/11/08/03/16/seamless-1807376_960_720.jpg"
        className="h-5/6 object-cover absolute mix-blend-soft-light"
      /> */}
      <div className="">
        <img src={Perfil} alt="Foto de perfil da Isadora" className="p-10 w-4/6"/>
        <h1 className="p-10 pt-0 text-lg text-justify w-full">Desenvolvedora Fullstack nas tecnologias React, Html, CSS, Node Js, mySQL, MongoDB, Docker, Typescript, JavaScript entre outras. Apaixonada por desafios e resolução de problemas. Formada em arquitetura, amante da matemática e da lógica desde pequena, me reencontrei no desenvolvimento de software e tenho adorado o mundo dos novos desafios digitais. Acredito muito no poder transformador da área de tecnologia desejo me desenvolver cada vez mais nessa área para poder fazer parte dessas mudanças. Trabalhei 4 anos na área de obras, atuando em posição de gerência solucionando questões que fugiam do planejamento, de maneira rápida e criativa. Acredito que essa vivência me ensinou muito a trabalhar em equipe e me auxilia hoje a lidar com os bugs e as questões que surgem no desenvolvimento dos códigos com paciência e atenção.</h1>
      </div>
    </div>
  )
}