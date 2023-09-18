import "tailwindcss/tailwind.css"
import { Data } from "@/components/data"
import { CardId } from "@/components/cardId"
import { PerfilCard } from "@/components/perfilCard"
import { Posts } from "@/components/data/post"
import { TextCard } from "@/components/textCard"
import { InputTextCard } from "@/components/inputTextCard"
import {useRouter} from "next/router"
import { MixCard } from "@/components/mixCard"

export default function Id(){
    const router=useRouter()
    const hideBtn=()=>{
       const box=document.getElementById('box')
       const show=document.getElementById('show')
       if(box?.classList.contains('fixed')){
          box?.classList.add('hidden')
          show?.classList.remove('hidden')
       }
    }
     const showBtn =()=>{
        const show=document.getElementById('show')
        const box=document.getElementById('box')
       if(box?.classList.contains('fixed')){
          box?.classList.remove('hidden')
          show?.classList.add('hidden')
       }
     }
    return(
      <>
     <div className="w-[100vw] h-[100vh] sm:mt-[2vh] border-box overflow-x-hidden overflow-y-auto  scrollbar-hide sm:scrollbar scrollbar-h-[10px] scrollbar-w-[10px]  scrollbar-thumb-rounded-xl scrollbar-thumb-gray-400">
          
            <div className="w-[100vw] min-h-[75vh] flex flex-col lg:flex-row items-center justify-center gap-5 ">
                <div className="bg-black sm:rounded-xl overrflow-hidden w-[100vw] sm:w-[90vw] lg:w-[52vw] h-[44vh] sm:h-[60vh] lg:h-[68vh] flex flex-col items-center justify-center gap-5">
                           <iframe className={`sm:rounded-xl w-[100%] h-[100%] bg-gray-200`}
                           src="https://www.youtube.com/embed/W2QeQ9ZufAk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                           </iframe>
                </div>
                <div className="flex flex-col gap-1 items-center w-[90vw] lg:hidden ">
                    <h1 className="pl-2 pb-2 w-[100%] text-[1.8rem] mt-[-1rem] mb-[-2.5rem]">
                            <strong>{router.query.id}</strong>
                        </h1>
                        <PerfilCard textTitle={router.query.id}  box="mt-5" />
                </div>
                <div className="lg:hidden w-[100vw] flex items-center justify-center"  id="show">
                    <MixCard className="fixed top-[88vh] flex items-center justify-between rounded-2xl px-5 w-[90%] h-[50px] bg-black opacity-90 text-white lg:hidden"
                     onclick={showBtn} item="^"/>                      
                </div>
                <div className=" hidden fixed top-[44.5vh] z-20 lg:static lg:flex flex-col bg-white border border-gray-400 p-1 border-box mb-10 sm:mb-0 lg:rounded-xl" id="box">
                     <MixCard className="flex items-center justify-between px-5 w-[100%] h-[50px] lg:h-[3rem] bg-black text-white lg:rounded-t-xl"
                     onclick={hideBtn} item="X"/>  
                    <div className="w-[97vw] lg:w-[28vw] h-[47vh] lg:h-[59.5vh]  rounded-xl border-box overflow-hidden overflow-y-auto  scrollbar scrollbar-h-[10px] scrollbar-w-[10px] scrollbar-thumb-rounded-xl scrollbar-thumb-gray-400">
                        
                            {
                                Data.map(data=>(
                                    // eslint-disable-next-line react/jsx-key
                                    <CardId className="flex-row gap-2 w-[97%] h-[5rem] m-2 " video="h-[80%] rounded-xl bg-gray-300" className2=" w-[8rem] h-[6rem] rounded-xl flex items-center justify-center overflow-hidden" text1="text-[.8rem]" text2="text-[12px]" text3="text-[12px pb-3]" perfil="w-[1.5rem] h-[1.5rem]" box2="h-[5rem] py-4" title={data.title} subtitle={data.views} src={data.src}/>
                                ))
                               }
                    </div>
                </div>
            </div>
            <div className="w-[100vw] justify-center hidden lg:flex gap-5">
                <div className="w-[52%] rounded-lg min-h-[80vh] ">
                    <h1 className="text-[1.8rem] mt-[-1rem] mb-[-2.7rem]">
                        <strong>{router.query.id}</strong>
                    </h1>
                    <PerfilCard textTitle={router.query.id}/>
                    <InputTextCard/>
                    {
                        Posts.map(post=>(
                            <TextCard key={post.title} title={post.title} text1={post.text} discurtiu={post.descurtiu} curtiu={post.curtiu} />
                        ))
                    }
                </div>
                <div className="w-[28%] flex flex-col gap-1">
                       {
                        Data.map(data=>(
                            // eslint-disable-next-line react/jsx-key
                            <CardId  className="flex-row gap-2 h-[6rem]" box="gap-1" className2="rounded-2xl w-[12rem] h-[5.5rem] bg-gray-200" title={data.title} subtitle={data.views} src={data.src}/>
                        ))
                       }
              </div>
            </div>
            <div className="w-[100vw] justify-center items-center flex flex-col lg:hidden gap-5">
            <div className="w-[90%] flex flex-col gap-1">
                       {
                        Data.map(data=>(
                            // eslint-disable-next-line react/jsx-key
                            <CardId  className="flex-row gap-2 h-[6rem]" box="gap-1" className2="rounded-2xl w-[12rem] h-[5.5rem] bg-gray-200" title={data.title} subtitle={data.views} src={data.src}/>
                        ))
                       }
              </div>
                <div className="w-[100%] rounded-lg min-h-[80vh] ">
                    
                    <InputTextCard/>
                    {
                        Posts.map(post=>(
                            <TextCard key={post.title} title={post.title} text1={post.text} discurtiu={post.descurtiu} curtiu={post.curtiu} />
                        ))
                    }
                </div>
               
            </div>
      </div>
      </>)
      }