import Carousel from "../components/Carousel";
import {skills} from '../data/data'; 

const SkillsSection = () => {
  return (
    <>
    {/**/}
      <div className="flex flexCol md:flex-row gap-10  overflow-hidden min-h-fit md:min-h-0 md:max-h-[600px] lg:max-h-[530px] justify-between w-full ">

        <div className="left ml-2">

          <div className="tracking-wider text-center md:text-left  w-full">
            <span className='mb-2 font-semibold'>     Skills & Technologies </span>
            <h1 className="text-center md:text-left text-[2.3rem] font-title title gradient-text mb-5">
              TECH STACK
            </h1>
          </div>
          <div className="w-full flexCol  gap-2 text-center md:text-left justify-start items-start">
            {skills.map((skill, i) => (

              <div key={`${skill}${i}`} className="text-center md:text-left justify-start items-start tracking-wider  flexCol w-full ">

                <div>
                </div>
                <div className=" flexCol  gap-2 w-full ">
                  <span className="text-lg w-full uppercase text-center md:text-left font-bold">{skill.skill}</span>
                  <div className="text-xs  text-slate-300  flex flex-wrap gap-4 flex-center md:text-left md:justify-start md:items-start">
                    {skill.skills.map((sk) => (
                      <span className="cursor-default rounded-full bg-dark border border-slate-700 px-4
                         text-xs py-2 w-fit hover:scale-115 text-slate-200 hover:text-light
                         font-medium shadow-lg transition-colors hover:border-light 
                         hover:shadow-[0_0_3px] hover:shadow-light duration-500">{sk}</span>
                    ))}
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        {/* r*/}
        <div className="flex animate-horizontal-swiper md:animate-swiper pause-animate   
         md:flexCol md:flex-col  gap-10 md:gap-10  my-10 md:my-0 px-5 
          min-w-full md:min-w-[100px]   md:h-full">
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default SkillsSection
