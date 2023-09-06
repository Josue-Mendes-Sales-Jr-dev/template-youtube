import "tailwindcss/tailwind.css"
import Link from "next/link"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {MdOutlineSubscriptions} from "react-icons/md"
import {} from "react-icons/"

interface ILayoutProps{
    title?: string
    image?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode
}

export const Navbar =(props:ILayoutProps)=>{
    return(
        <>
         <div className={`w-[20%] h-[100%] flex gap-7 flex-col items-center justify-center border-box overflow-y-auto pt-[12rem] pb-[2rem]  ${props.className}`}>
            <ul className="w-[80%] gap-2 flex flex-col items-center justify-center">
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-2 px-2" href=''><AiOutlineHome/> Início</Link> </li>
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-2 px-2" href=''><AiOutlineYoutube/> Shorts</Link> </li>
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link className="flex items-center  gap-2 px-2" href=''><MdOutlineSubscriptions/>Inscrições</Link> </li>
            </ul>
            <ul className="w-[80%] gap-2 flex flex-col items-center justify-center">
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Biblioteca</Link> </li>
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Histórico</Link> </li>
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Vídeos</Link> </li>
                <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''> Top list</Link> </li>
            </ul>
            <ul className="w-[80%] gap-2 flex flex-col items-center justify-center">

            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Inscrito</Link> </li>
            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Em alta</Link> </li>
            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Jogos</Link> </li>
            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Esportes</Link> </li>
            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Filmes</Link> </li>
            <li className="bg-gray-300 w-[100%] p-2 rounded-lg"><Link href=''>Aprender</Link> </li>
            </ul>
           
         </div>
        </>
    )
}