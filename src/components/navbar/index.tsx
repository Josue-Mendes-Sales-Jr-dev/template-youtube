import "tailwindcss/tailwind.css"
import Link from "next/link"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {MdOutlineSubscriptions} from "react-icons/md"
import {} from "react-icons/"

interface INavbarProps{
    title?: string
    image?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode
}

export const Navbar =(props:INavbarProps)=>{
    return(
        <>
         <div className={`text-[1rem] w-[16%] h-[100%] flex gap-5 flex-col items-center justify-center border-box hover:overflow-y-auto pt-[12rem] pb-[2rem] scrollbar scrollbar-h-[10px] scrollbar-w-[10px] scrollbar-thumb-rounded-xl scrollbar-thumb-gray-400 ${props.className}`}>
            <ul className="w-[90%] gap-1 flex flex-col  justify-center">
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Início</Link> </li>
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineYoutube className="text-[1.4rem]"/> Shorts</Link> </li>
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><MdOutlineSubscriptions  className="text-[1.4rem]"/>Inscrições</Link> </li>
            </ul>
            <ul className="w-[95%] border-t border-gray-300 pt-5 gap-1 flex flex-col r justify-center">
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Biblioteca</Link> </li>
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Histórico</Link> </li>
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Vídeos</Link> </li>
                <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Top list</Link> </li>
            </ul>
            <ul className="w-[95%] border-t border-gray-300 pt-5
             gap-1 flex flex-col justify-center">

            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Inscrito</Link> </li>
            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Em alta</Link> </li>
            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Jogos</Link> </li>
            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Esportes</Link> </li>
            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Filmes</Link> </li>
            <li className="w-[90%] hover:bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-4 px-2" href=''><AiOutlineHome className="text-[1.4rem]"/> Aprender</Link> </li>
            </ul>
           
         </div>
        </>
    )
}