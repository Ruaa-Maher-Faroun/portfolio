import { contactArr } from '../data/data';
import VideoLayout from '../layout/VideoLayout';

const HeroSection = () => {
    return (
        <VideoLayout id={'home'}>
            <p className=' tracking-wider font-light text-lg uppercase'>Frontend Developer building fast, polished web experiences.</p>
            <h1 className='  md:text-4xl  xl:text-8xl font-title text-4xl sm:text-6xl gradient-text
                    lg:text-8xl font-bold '>Hi, I'm Rua'a         </h1>
                <p className='paragraphs w-full mt-10  text-shadow-2xl'>
                a frontend/full-stack developer specializing in React, TypeScript, and Next.js. I build production-grade interfaces — from interactive 3D experiences to full e-commerce platforms.
            </p>
            <div className="socials flex justify-center mt-12 w-full relative gap-5 z-2">
                {contactArr.map((social) => (
                    <a key={social.href} href={social.href} target="_blank" className="size-14 animate-bounce
                            rounded-full flex-center  border hover:border-3 duration-500 hover:scale-150
                     border-dark hover:border-light hover:text-light p-3 text-xs text-dark cursor-pointer hover:bg-dark
                            ">
                        <span className='h-7 w-7 flex items-center justify-center' dangerouslySetInnerHTML={{ __html: social.icon }} />
                    </a>
                ))}
            </div>
        </VideoLayout>


    )
}
export default HeroSection

// import { contactArr } from '../data/data';

// const HeroSection = () => {
//     return (

//         <>
//             <div className='w-full text-center'>
//                 <p className='paragraphs text-base w-full '>Frontend Developer building fast, polished web experiences.</p>
//                 <h1 className="py-0 h-fit font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl">
//                     Hi, I'm
//                     <span className='gradient-text font-title'> Rua'a</span>
//                 </h1>

//             </div>
//             <p className='paragraphs text-white text-shadow-2xl'>
//                 a frontend/full-stack developer specializing in React, TypeScript, and Next.js. I build production-grade interfaces — from interactive 3D experiences to full e-commerce platforms.

//             </p>
//             <div className="mt-10 ">
//                 <a href='#projects' className='primary-btn btns'>View My Work

//                 </a>
//                 <a href="#contact" className='secondary-btn btns '>
//                     Get In Touch</a>
//             </div>
//             <div className="contact flex-center gap-6 animate-bounce mt-10 ">
//                 {contactArr.map((contact)=>(
//                     <a href={contact.href} className='rounded-full flex-center h-15 w-15 border hover:border-3 duration-500 hover:scale-150
//                      border-slate-600
//                      hover:border-light hover:text-light
//                      p-3 text-xs text-dark cursor-pointer hover:bg-slate-950'>
//                     <div dangerouslySetInnerHTML={{__html:contact.icon}} className='cursor-pointer'/>
//                 </a>
//                 ))}
//             </div>
//         </>

//     )
// }

// export default HeroSection
