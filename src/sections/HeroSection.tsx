import { contactArr } from '../data/data';

const HeroSection = () => {
    return (
     <>
            <p className=' tracking-wider font-light text-lg uppercase'>Frontend Developer building fast, polished web experiences.</p>
            <h1 className='  md:text-4xl  xl:text-8xl font-title text-4xl sm:text-6xl gradient-text
                    lg:text-8xl font-bold '>Hi, I'm Rua'a         </h1>
                <p className='paragraphs w-full mt-10  text-shadow-2xl'>
                a frontend/full-stack developer specializing in React, TypeScript, and Next.js. I build production-grade interfaces — from interactive  experiences to full e-commerce platforms.
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
        </>


    )
}
export default HeroSection
