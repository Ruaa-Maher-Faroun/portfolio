import { skillsSwiper } from '../data/data'

const Carousel = () => {
    const loop = [...skillsSwiper,...skillsSwiper];
    return (
        <>
            {loop.map((skill) => (
                <div className='rounded-full border border-light p-3 w-[80px] h-[80px] 
                flex-center hover:border-dark duration-500 hover:scale-110' title={skill.name}>
                    <img src={skill.icon} alt={skill.name} className='w-3/4 h-3/4' />
                </div>
            ))}
        </>
    )
}

export default Carousel
