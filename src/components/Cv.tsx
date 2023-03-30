import Perfil from "../Images/perfil.jpg";

interface CvProps {
  rotate: String;
  z: Number;
  color: String;
}

export function Cv(props: CvProps) {
  return (
    <div
      className={`transition-all ease-in delay-150 duration-1000 absolute top-0 z-${props.z} drop-shadow-xl hover:drop-shadow-2xl w-[35rem] h-[50rem] m-16  hover:ml-72 ${props.rotate} hover:rotate-0 hover:m-4 ring-1 ring-gray-900/5 ${props.color} hover:z-30`}
    >
      {/* <img
        src="https://cdn.pixabay.com/photo/2016/11/08/03/16/seamless-1807376_960_720.jpg"
        className="h-5/6 object-cover absolute mix-blend-soft-light"
      /> */}
      <div className="">
        <img
          src={Perfil}
          alt="Foto de perfil da Isadora"
          className="p-10 w-4/6 m-auto"
        />
        <h1 className="p-10 pt-0 text-lg text-justify w-full">
          Desenvolvedora Fullstack apaixonada por desafios e resolução de problemas. Formada em arquitetura, amante da matemática e da lógica desde pequena, me reencontrei no desenvolvimento de software e tenho adorado o mundo dos novos desafios digitais. Acredito muito no poder transformador da área de tecnologia desejo me desenvolver cada vez mais nessa área para poder fazer parte dessas mudanças. Trabalhei 4 anos na área de obras, atuando em posição de gerência solucionando questões que fugiam do planejamento, de maneira rápida e criativa. Acredito que essa vivência me ensinou muito a trabalhar em equipe e me auxilia hoje a lidar com os bugs e as questões que surgem no desenvolvimento dos códigos com paciência e atenção.
        </h1>
      </div>
    </div>
  );
}
