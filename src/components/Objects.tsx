import KeyBoard from "../Images/keyboard.png";
import Plant from "../Images/tea5.png";
import Pen from "../Images/pen4.png";
import Pins from "../Images/pins2.png";

export function Objects() {
  return(
    <>
      <div className="absolute -z-10 md:z-[5] -rotate-[30deg] -left-64 w-[58rem] -top-80 drop-shadow-3xl">
        <img
            src={KeyBoard}
            alt="teclado visto de cima"
            className="object-contain"
          />
      </div>
      <div className="absolute z-10 -rotate-[30deg] w-[15rem] -right-24 md:right-6 lg:right-96 top-32 md:top-20">
        <img
            src={Plant}
            alt="vasinho com suculenta"
            className="object-contain"
          />
      </div>
      <div id="shadow-plant" className="absolute z-[8] w-[15rem] h-[15rem] rounded-full -right-28 md:right-2 lg:right-[23rem] top-36 md:top-24 bg-black/50 blur-lg">
      </div>
      <div className="absolute z-10 rotate-[90deg] w-[15rem] -right-8 bottom-44 lg:right-32 lg:bottom-auto lg:top-20">
        <img
            src={Pins}
            alt="porta trecos de curtiça com clipes"
            className="invisible sm:visible object-contain"
          />
      </div>
      <div id="shadow-pins" className="invisible sm:visible absolute z-[8] w-[15rem] h-[15rem] rounded-full -right-12 bottom-40 lg:right-28 lg:bottom-auto lg:top-24 bg-black/50 blur-lg">
      </div>
      <div className="absolute z-20 -rotate-[25deg] w-20 left-[24rem] top-80 2xl:left-[44rem]">
        <img
            src={Pen}
            alt="lápis preto"
            className="object-cover"
          />
      </div>
      <div id="shadow-pen" className="absolute z-[18] -rotate-[25deg] w-7 h-[50rem] left-[29rem] top-[25rem] 2xl:left-[49rem] bg-black/70 blur-lg">
      </div>
    </>
  )
}