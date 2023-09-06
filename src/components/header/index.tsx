import "tailwindcss/tailwind.css"

interface ILayoutProps{
    title?: string
    image?: any
    subtitle?: string
    views?: string
    className?: string
    children?: React.ReactNode
}

export const Header =(props:ILayoutProps)=>{
    return(
        <>
             <div className={`w-[100vw] h-[10vh] flex items-center justify-center ${props.className}`}>
                <div className="w-[20%] h-[100%] bg-red-300">

                </div>
                <div className="w-[60%] h-[100%] bg-green-300">

                </div>
                <div className="w-[20%] h-[100%] bg-blue-300">
                 g
                </div>
             </div>
       
        </>
    )
}