import "tailwindcss/tailwind.css"
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineYoutube} from "react-icons/ai"
import {HiOutlineBellAlert} from "react-icons/hi2"
import {PiVideoCameraThin} from "react-icons/pi"
import {BiSolidMicrophone} from "react-icons/bi"
import {BiSearch} from 'react-icons/bi'

import { Input } from "../input"


interface IHeaderProps{
    title?: string
    image?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode

}

export const Header =(props:IHeaderProps)=>{
    const showBtnSearch =()=>{

    }
    
    return(
        <>
             <div className={`w-[100vw] h-[10vh] flex items-center justify-center p-2 ${props.className}`}>
                <div className="w-[16%] h-[100%]  flex items-center  gap-5 text-[1.3rem]">
                 <GiHamburgerMenu/>
                 <span className="hidden md:flex items-center justify-center gap-1">
                    <AiOutlineYoutube className='text-[2rem] bg-red-500 rounded-lg'/>
                    <strong>

                        YouTube
                    </strong>
                 </span>
                </div>
                <form className="flex items-center justify-center w-[70%] lg:w-[64%] h-[100%] ">
                    <div className="flex items-center justify-center w-[70%] h-[100%] ">
                        <Input type='text' placeHolder='Search' className="hidden sm:block h-[85%] w-[85%] border border-gray-300 rounded-l-3xl pl-4"/>
                        <button className="hidden sm:block bg-gray-300 hover:bg-gray-400 h-[85%] w-[10%] rounded-r-3xl flex items-center justify-center">
                             <BiSearch className="text-[1.4rem]"/>
                        </button>
                    </div>
                    <button onClick={showBtnSearch} className="mr-2 sm:hidden bg-gray-300 hover:bg-gray-400 rounded-full p-[.5rem] flex items-center justify-center">
                             <BiSearch className="text-[1.3rem] "/>
                    </button>
                    <span>
                        <BiSolidMicrophone className="text-[1.6rem]"/>
                    </span>
                </form>
                
                <div className="flex items-center justify-end pr-4 gap-7 md:w-[18%] h-[100%]">
                 <span className="hidden lg:block">
                   <PiVideoCameraThin className="text-[1.4rem]"/>
                 </span>
                 <span className="hidden lg:block">
                    <HiOutlineBellAlert className="text-[1.4rem]"/>
                 </span>
                 <span className="w-[2rem] h-[2rem] bg-red-700 rounded-full">
                 </span>
                </div>
             </div>
       
        </>
    )
}