import "tailwindcss/tailwind.css"
import {Input} from "../input"
import {} from "react-icons/"
import React from "react"


interface ICardProps{
    title?: string
    className?: string
    src?: any

}

export const InputTextCard =(props:ICardProps)=>{
    return(
        <>
        
        <div className={`${props.className} flex items-center justify-center gap-4 px-5 m-2 w-[98.2%] h-[5rem] rounded-lg  border-box overflow-hidden`}>
            <span className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full">
            
            </span>
            <Input type="text"placeHolder="Adicione um comentário..." className="border-b-2 bg-white rounded-t-xl  border-gray-300 w-[95%] p-2 h-[3rem] outline-none"/>
        </div>
        </>
    )
}