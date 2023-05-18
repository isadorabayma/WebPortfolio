import { CursorClick } from "@phosphor-icons/react";

export function Click() {
  return(
    <>
      <div id="ClickProject" className="absolute top-[35rem] left-[7rem] md:left-auto md:right-[12rem] md:top-[28rem]" >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
      <div id="ClickExpirence" className="absolute top-[40rem] left-[19rem] sm:top-[45rem] sm:left-[22rem] xl:top-[40rem] xl:left-[40rem]" >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
      <div id="ClickSkills" className="absolute top-[34rem] left-[16rem]
      sm:top-[37rem] sm:left-[18rem] xl:top-[32rem] xl:left-[36rem]" >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
      <div id="ClickAbout" className="absolute top-[28rem] left-[13rem]
      sm:top-[29rem] sm:left-[14rem] xl:top-[24rem] xl:left-[32rem]" >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
      <div id="ClickCard" className="absolute top-[16rem] right-[12rem] md:top-[13rem] md:right-[19rem] lg:right-[42rem] " >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
      <div id="ClickHeader" className="absolute top-[2rem] right-[3rem]" >
        <CursorClick size={50} className="absolute z-40"/>
        <CursorClick size={50} weight="fill" className="absolute text-white z-[38]"/>
      </div>
    </>
  )
}