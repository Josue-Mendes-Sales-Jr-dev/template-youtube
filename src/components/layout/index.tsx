import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
import { Header } from "../header"

interface ILayoutProps{
    title?: string
    image?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode
}

export const Layout =(props:ILayoutProps)=>{
    return(
        <>
         <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] border-box overflow-x-hidden">
            <Header className=""/>
             <div className={`w-[100%] h-[90%] flex items-center justify-center ${props.className}`}>
                <Navbar />
                <div className="w-[80%] h-[100%] bg-black">
                  {props.children}
                </div>
             </div>
         </div>
        </>
    )
}