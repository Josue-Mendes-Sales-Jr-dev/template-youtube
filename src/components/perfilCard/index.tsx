import "tailwindcss/tailwind.css"
import {HiOutlineBellAlert} from "react-icons/hi2"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import {BsArrow90DegRight} from "react-icons/bs"
import {TfiDownload} from "react-icons/tfi"
import {} from "react-icons/"
import { useState } from "react"


interface ICardProps{
    title?: string
    src?: any
    subtitle?: string
    textTitle?: any
    text1?: string
    text2?: string
    box2?: string
    box?: string
    video?: string
    perfil?: string
    views?: string
    className?: string
    className2?: string
    children?: React.ReactNode
}

export const PerfilCard =(props:ICardProps)=>{
   const [count, setCount]=useState(3)
   const [countR, setCountR]=useState(1)
   const add=()=>{
       setCount((e)=>(e=e+1))
   }
   const remove=()=>{
       setCount((e)=>(e=e-1))
   }

  
  
    return(
        <>
        
        <div className={`${props.className} flex gap-4 flex-col  items-center justify-center ml-[-1rem] w-[100%] h-[14rem] rounded-lg border-box overflow-hidden `}>
            <div className="flex items-center justify-center gap-3 pl-5 lg:pl-0 pr-[2rem] sm:pr-0">
              <div  className="flex w-[35%] items-center justify-center gap-1 ">
                <span className="ml-[-1rem] w-[2.25rem] h-[2.25rem] rounded-full bg-black">
                </span>
                 <h1 className="flex flex-col pl-2 justify-center w-[100%] sm:w-[80%] ">
                  <strong className="text-[.8rem] sm:text-[1rem]">{props.textTitle}</strong>
                  <p className="text-[.55rem]  lg:text-[.7rem] w-[100%]">
                    4,95 mi de inscritos
                  </p>
                </h1>
              </div>

              <span className="hidden max-w-[400px]:flex bg-black py-1 text-[1rem]  lg:mr-14 text-center w-[9rem] rounded-xl text-white ">
                inscrever-se
              </span>
              
              <div className="flex items-center justify-center">              
               <button className="flex gap-2 items-center justify-center rounded-l-xl px-2 py-1 bg-gray-100 hover:bg-gray-200 w-[5.5rem]"><AiOutlineLike onClick={add}/><span className="text-[1rem]"> {count} mi </span></button>
               <button className="flex gap-2 items-center justify-center rounded-r-xl px-2 py-[8px] bg-gray-100 hover:bg-gray-200 w-[2rem]"><AiOutlineDislike className="text-[1rem]" onClick={remove}/> </button>
              </div>

              
              <span className="hidden sm:flex px-2 py-1 text-[1rem] gap-2 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200">
                <BsArrow90DegRight/> compartilha
              </span>
              <span  className="hidden px-2 py-1 text-[.9rem] gap-2 items-center justify-center rounded-lg bg-gray-300 hover:bg-gray-400">
                <TfiDownload/> Dnownload
              </span>
            </div>
            <div className={`${props.box} flex items-center justify-center w-[100%] h-[5rem] mt-[1rem] sm:mt-0`}>
            <span className="inline ml-[20px] sm:ml-0 w-[95%] bg-gray-100 hover:bg-gray-300 px-5 py-1 rounded-lg"><strong>1,4bi de visualizações há 8 anos </strong>
            #className flex flex-col items-center justify-cente 
            className flex flex-col items-center justify-center
            className flex flex-col items-center justify-center
            </span> 
            </div>
         </div>
         
        </>
    )
}