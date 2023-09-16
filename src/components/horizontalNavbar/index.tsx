import "tailwindcss/tailwind.css"
import Link from "next/link"
import {IoMdArrowDroprightCircle} from "react-icons/io"
import {IoMdArrowDropleftCircle} from "react-icons/io"
import {} from "react-icons/"

interface IHorizontalProps{
    className:string
}
const data =[ {name:"Tudo"},{name: "Rock"},{name: "Grings"},{name: "Português"},{name: "Cálculo"},{name: "Matemática"},{name: "Português"},{name: "Next.js"},{name: "Javascript"},{name: "Algebra"},{name: "React.js"},{name: "Arquivos"},{name: "Music"}]
export const HorizontalNavbar =(props:IHorizontalProps)=>{
    const handleLeft=()=>{
        var slider=document.getElementById("slide");
        slider!.scrollLeft=slider!.scrollLeft - 500;
        var arrowShow=document.getElementById("left")
        if(slider?.scrollLeft===0){
            arrowShow?.classList.add('hidden')
        }        
    }
    const handleRight=()=>{
        var slider=document.getElementById("slide")
        var arrowShow=document.getElementById("left")
        if(arrowShow?.classList.contains("hidden")){
          arrowShow.classList.remove("hidden")
          arrowShow.classList.add("flex")
        }
        slider!.scrollLeft=slider!.scrollLeft+500;
        console.log('foi')
                
    }

    return(
        <>
        <div className={`${props.className} w-[97%] pl-4 h-[6vh] flex overflow-y-hidden items-center gap-2`} >
         <IoMdArrowDropleftCircle size={40} onClick={handleLeft} className="hidden" id="left" />
         <ul className="flex pl-5 gap-4 w-[100%] h-[100%] overflow-hidden" id="slide">      
          {
            data.map((data)=>(
                <li className="flex items-center px-3 py-2 h-[95%] bg-gray-300 hover:text-white hover:bg-black rounded-xl"  key={data.name}>
                    <Link  href=''>
                        {data.name}
                    </Link>
                </li>
            ))
           }
  
         </ul>
         <IoMdArrowDroprightCircle onClick={handleRight} size={40}/>
        </div>
        </>
    )
}