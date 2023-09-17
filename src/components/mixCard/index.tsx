
interface IMixProps{
    className?: string
    item?: string
    onclick?: ()=> void
}
export const MixCard=(props:IMixProps)=>{
    return(
        <>
        <div className={`${props.className} text-[.9rem]`} >
                         <div className="flex flex-col">
                            <h1>
                            Mix de Arctic Monkeys - Do you wanna now 
                            </h1>
                           <p className="text-[0.6rem]">
                            Mix são playlists feitas pelo youtube exclusivamente para você
                           </p>
                         </div>
                         <button onClick={props.onclick} >
                            {props.item}
                         </button>
                </div>
        </>
    )
}