import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
import { Header } from "../header"
import { HorizontalNavbar } from "../horizontalNavbar"

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
             <div className={`w-[100%] h-[90%] flex items-center justify-center ${props.className} overflow-hidden`}>
                <Navbar className="hidden md:flex " />
                <div className="flex flex-col w-[100%] md:w-[84%] h-[100%]">
                     <HorizontalNavbar className=''/>
                    <div className=" px-2 md:px-0 md:w-[100%] h-[100%] flex flex-wrap items-center justify-center  overflow-y-auto scrollbar scrollbar-h-[10px] scrollbar-w-[10px] scrollbar-thumb-rounded-xl scrollbar-thumb-gray-400 mx-[2px]">
                      {props.children}
                    </div>
                </div>
                </div>
         </div>
        </>
    )
}