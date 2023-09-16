import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
import { Header } from "../header"
import { type } from "os"

interface IInputProps{
    type?: string
    value?: any
    placeHolder?: string
    onChange?: (e:any)=> void
    className?: string
}

export const Input=(props:IInputProps)=>{
    return(
        <>
         <input type={props.type} placeholder={props.placeHolder} value={props.value} onChange={props.onChange} className={props.className}/>
        </>
    )
}