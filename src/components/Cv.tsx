import Perfil from "../Images/perfil.jpg"

export function Cv() {
  return (
    <div className="w-[35rem] h-[40rem] m-4">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/08/03/16/seamless-1807376_960_720.jpg"
        className="h-full w-full object-cover absolute mix-blend-soft-light"
      />
      <div className="m-4 bg-white">
        <img src={Perfil} alt="Foto de perfil da Isadora" className="h-48"/>
        <h1>Desenvolvedora Fullstack nas tecnologias React, Html, CSS, Node Js, mySQL, MongoDB, Docker, Typescript, JavaScript entre outras. Apaixonada por desafios e resolução de problemas. Formada em arquitetura, amante da matemática e da lógica desde pequena, me reencontrei no desenvolvimento de software e tenho adorado o mundo dos novos desafios digitais. Acredito muito no poder transformador da área de tecnologia desejo me desenvolver cada vez mais nessa área para poder fazer parte dessas mudanças. Trabalhei 4 anos na área de obras, atuando em posição de gerência solucionando questões que fugiam do planejamento, de maneira rápida e criativa. Acredito que essa vivência me ensinou muito a trabalhar em equipe e me auxilia hoje a lidar com os bugs e as questões que surgem no desenvolvimento dos códigos com paciência e atenção.</h1>
      </div>
    </div>
  )
}