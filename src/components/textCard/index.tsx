import "tailwindcss/tailwind.css"
import {HiOutlineBellAlert} from "react-icons/hi2"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import {} from "react-icons/"


interface ICardProps{
    title?: string
    src?: any
    text1?: string
    curtiu?: string
    discurtiu?: string
    className?: string
    className2?: string
    children?: React.ReactNode
}

export const TextCard =(props:ICardProps)=>{
    return(
        <>
        
        <div className={`${props.className} flex gap-5 flex-col px-5 justify-center m-2 w-[98.2%] mb-10 rounded-lg  border-box overflow-hidden `}>
          <div className="flex gap-4">
            <span className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full">
            
            </span>
            <h1 className="flex items-center justify-center gap-2">
                <strong>{props.title}</strong>
                <p> há 3 anos</p>
            </h1>
          </div>
          <div className=" flex flex-col gap-4">

              <p className="w-[90%]">
                {props.text1}
              </p>
            <div className="flex">
              <button className="w-[6rem] items-center text-[1.4rem] flex gap-3"><AiOutlineLike /> <span className="text-[1rem]"> {props.curtiu} mil</span></button>  
              <button className="w-[6rem] items-center text-[1.4rem] flex gap-3"><AiOutlineDislike />  <span className="text-[1rem]">{props.discurtiu} mil</span></button>  
            </div>
          </div>
        </div>
        </>
    )
}