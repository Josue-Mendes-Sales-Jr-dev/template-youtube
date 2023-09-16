import "tailwindcss/tailwind.css"
import Link from "next/link"
import {BiDotsVerticalRounded} from "react-icons/bi"


interface ICardProps{
    title?: any
    src?: any
    subtitle?: string
    text1?: string
    text2?: string
    text3?: string
    box2?: string
    box?: string
    video?: string
    perfil?: string
    views?: string
    className?: string
    className2?: string
    children?: React.ReactNode
}

export const CardId =(props:ICardProps)=>{
    return(
        <>
        
        <Link href={props.title} className={`${props.className} flex  items-center justify-center  w-[100%] rounded-xl hover:bg-gray-300 border-box overflow-hidden `}>
              
              <div className={`${props.className2} w-[100%]  rounded-xl border-box overflow-hidden`}>
              
                 <iframe className={`${props.video} w-[100%] h-[100%] rounded-xl`} 
                 src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              
              </div>
               
               <div className={`${props.box2} flex w-[90%]  justify-center `}>
                 
                 <div className={`${props.box} w-[80%]  flex flex-col items-center justify-center `}>
                  <h1 className={`${props.text1} w-[100%] text-[1.15rem]`}>
                    <strong>{props.title}</strong>
                  </h1>
                  <div className="flex flex-col w-[100%]">
                    <p className={`${props.text2} w-[100%] h-[100%] text-[1rem]`}> Ivan Mendes </p>
                    <p className={`${props.text3} w-[100%] h-[100%] text-[.8rem]`}> {props.subtitle} há 2 meses </p>
                  </div>
                 </div> 
                 <span className="text-[1.2rem] ">
                    <BiDotsVerticalRounded/>
                  </span>               
              </div>
         </Link>

         
        </>
    )
}