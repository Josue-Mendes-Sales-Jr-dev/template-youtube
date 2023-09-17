import "tailwindcss/tailwind.css"
import Link from "next/link"


interface ICardProps{
    title?: any
    src?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode
}

export const Card =(props:ICardProps)=>{
    return(
        <>
        
        <Link href={props.title} className="flex lg:hidden flex-col items-center justify-center m-2 w-[100%] h-[18rem] rounded-lg  border-box overflow-hidden ">
            <div className="w-[100%] h-[15rem] bg-red-500 rounded-xl">
            <iframe className={` w-[100%] h-[100%] rounded-xl `} src={props.src}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex w-[90%] pt-3 gap-5 h-[7rem]">
               <span className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full">
               </span>
                <div className="w-[80%] h-[4rem] flex flex-col items-center justify-center gap-1">
                  <h1 className="w-[100%] text-[1.3rem]">
                  <strong>{props.title}</strong>
                  </h1>
                  <div className="w-[100%]">
                    <p className="w-[100%] text-[.8rem]">@gshr0987</p>
                    <p className="w-[100%] text-[.9rem]">{props.subtitle} há 3 meses</p>
                  </div> 
               </div>
                
            </div>
         </Link>

         <Link href={props.title} className="xl:hidden lg:flex hidden flex-col items-center justify-center m-2 w-[48%] h-[18rem] rounded-lg  border-box overflow-hidden ">
            <div className="w-[100%] h-[15rem] bg-blue-700 rounded-xl">
            <iframe className={` w-[100%] h-[100%] rounded-xl`} src={props.src}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex w-[90%] pt-3 gap-5 h-[7rem]">
               <span className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full">
                    </span>
                <div className="w-[80%] h-[4rem] flex flex-col items-center justify-center gap-1">
                  <h1 className="w-[100%] text-[1.3rem]">
                   <strong>{props.title}</strong>
                  </h1>
                  <div className="w-[100%]">
                    <p className="w-[100%] text-[.8rem]">@gshr0987</p>
                    <p className="w-[100%] text-[.9rem]">{props.subtitle} há 3 meses</p>
                  </div>              
               </div>
                
            </div>
         </Link>

         <Link href={props.title} className="hidden xl:flex flex-col items-center justify-center m-2 w-[31.5%] h-[18rem] rounded-lg  border-box overflow-hidden ">
            <div className="w-[100%] h-[15rem] bg-red-500 rounded-xl">
            <iframe className={` w-[100%] h-[100%] rounded-xl`} src={props.src}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex w-[90%] pt-3 gap-5 h-[7rem]">
               <span className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-full">
              </span>
                <div className="w-[80%] h-[5rem] flex flex-col items-center justify-center gap-1">
                  <h1 className="w-[100%] text-[1.2rem]">
                    <strong>{props.title}</strong>
                  </h1>
                  <div className="w-[100%]">
                    <p className="w-[100%] text-[.8rem]">@gshr0987</p>
                    <p className="w-[100%] text-[.9rem]">{props.subtitle} há 3 meses</p>
                  </div>
                </div>
                
            </div>
         </Link>
        </>
    )
}