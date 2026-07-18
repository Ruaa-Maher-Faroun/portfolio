import type { Dispatch, ReactNode, SetStateAction } from "react"

const VideoLayout = ({children,id,setReady}:{children:ReactNode,id:string,setReady:Dispatch<SetStateAction<boolean>>;}) => {
    
    return (
            <section className="overflow-hidden max-w-screen min-h-screen relative pb-20" id={id}>
                {/* Background video */}
                <video 
               onCanPlayThrough={() => setReady(true)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="fixed top-0 left-0 w-full h-full object-cover -z-1 ">
                    <source src="/hero-vid.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 z-1 opacity-20  max-w-full h-full bg-dark"></div>

                <div   className='w-full min-h-screen text-center flex flex-col items-center justify-between pb-12'>
                    <div data-aos="fade-up" className={`flex flex-col justify-center relative 
                    z-2 w-11/12 sm:w-4/5 md:w-2/3 ${id==='home'? "lg:w-1/2" : "text-left" } mt-36 md:mt-40 hero
                       bg-white/30 backdrop-blur-md p-8 md:p-18 rounded-4xl border border-white`}>

                        {children}
                    </div>

                </div>
            </section>

            )
      }


            export default VideoLayout
