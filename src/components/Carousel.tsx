import { skillsSwiper } from '../data/data'

const Carousel = () => {
    const loop = [...skillsSwiper,...skillsSwiper];
    return (
        <>
            {loop.map((skill) => (
                <div className='rounded-full border border-light p-0 md:p-3 min-w-[80px] md:max-w-[80px] h-[80px] 
                flex-center hover:border-dark duration-500 hover:scale-110' title={skill.name}>
                    <img src={skill.icon} alt={skill.name} className='max-w-[40px] max-h-[40px]' />
                </div>
            ))}
        </>
    )
}

export default Carousel
