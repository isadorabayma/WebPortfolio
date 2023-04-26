import { X } from "phosphor-react";

export function Tablet() {
  return (
    <div id="tablet" className="absolute z-10 
    
    rotate-6 mt-56 
   
    hover:rotate-0 hover:-right-[1.5rem]

    lg:mt-16 hover:mt-6
    
    drop-shadow-xl h-[41rem] sm:h-[35rem] w-[23rem] sm:w-[50rem] bg-black rounded-[2rem] border-b-2 border-r-2 border-stone-600 lg:ml-14 p-[1rem] ring-1 ring-gray-900/5">
      <div id="screan" className="bg-stone-200 h-[37rem] sm:h-[31rem] w-full lg:w-[43rem] border-2 border-stone-800 rounded-2xl overflow-auto">
        <h1 className="text-5xl text-stone-800 mt-3 ml-5 font-serif font-semibold">Projects</h1>
        <div id="content-tablet-section" className="relative border-y-2 border-stone-800 m-4 mb-10 py-3">
          <div className="bg-white overflow-hidden rounded-2xl my-5 drop-shadow-xl">
            <img src="https://lh4.googleusercontent.com/GntqrDbtf6I8Es7oZlh6CfcsmJ7o5bbVp8kn14Ol14cMa0PA6ENu0_Q_GmwtAPNLaGNLifh3b6JlOeaxlP86X-fzVgSIlLdbtZifBgsu33AmmazlZVsECpxKNnueh0fpewbCesFm" alt="site 1" />
            <div className="px-3">
              <h2 className="my-2 font-bold text-lg">Nome do projeto</h2>
              <p>Descrição do projeto vai entrar aqui nesse espaço. Falando um pouco sobre e quem ajudou, o que eu aprendi e tal </p>
              <div className="flex flex-row justify-between my-2 font-bold">
                <a>html</a>
                <p>|</p>
                <a>javaScript</a>
                <p>|</p>
                <a>tailwind</a>
              </div>
              <div className="flex flex-row justify-around p-1 mb-3">
                <p>Demo</p>
                <p>Repo</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden rounded-2xl my-5 drop-shadow-xl">
            <img src="https://lh4.googleusercontent.com/AusYVANU-JN_QbvS-1KCz3KK18X9wmS_MO8gtDrrCNYGc4Q-aahzaBqhz5t4fUM2B--FH7IB5f4DKgWABZBLuS_SQk_fOi89uD7DZTZNt1jOZw6KhZDi9Ef2ZJ7dtVGJDGkd-nbw" alt="site 1" />
            <h2 className="my-2 font-bold text-lg">Nome do projeto</h2>
            <p>Descrição do projeto vai entrar aqui nesse espaço. Falando um pouco sobre e quem ajudou, o que eu aprendi e tal </p>
            <div className="flex flex-row justify-around my-2 font-bold">
              <a>html</a>
              <p>|</p>
              <a>javaScript</a>
              <p>|</p>
              <a>tailwind</a>
            </div>
            <div className="flex flex-row justify-around p-1 mb-3">
              <p>Demo</p>
              <p>Repo</p>
            </div>
          </div>

          <div className="bg-white overflow-hidden rounded-2xl my-5 drop-shadow-xl">
            <img src="https://lh4.googleusercontent.com/GntqrDbtf6I8Es7oZlh6CfcsmJ7o5bbVp8kn14Ol14cMa0PA6ENu0_Q_GmwtAPNLaGNLifh3b6JlOeaxlP86X-fzVgSIlLdbtZifBgsu33AmmazlZVsECpxKNnueh0fpewbCesFm" alt="site 1" />
            <h2 className="my-2 font-bold text-lg">Nome do projeto</h2>
            <p>Descrição do projeto vai entrar aqui nesse espaço. Falando um pouco sobre e quem ajudou, o que eu aprendi e tal </p>
            <div className="flex flex-row justify-around my-2 font-bold">
              <a>html</a>
              <p>|</p>
              <a>javaScript</a>
              <p>|</p>
              <a>tailwind</a>
            </div>
            <div className="flex flex-row justify-around p-1 mb-3">
              <p>Demo</p>
              <p>Repo</p>
            </div>
          </div>
          <button className="absolute right-2 -bottom-9">
            <X size={25} weight="bold"/>
          </button>
        </div>
      </div>
      <div className="ring-1 ring-gray-900/10 bg-red-500 w-10"></div>
    </div>
  );
}

// transition-all ease-in-out duration-300


// rotate-0 right-[6rem]

