import Carousel from "../components/Carousel";
import {skills} from '../data/data'; 

const SkillsSection = () => {
  return (
    <>
      <div className="parent flex overflow-hidden lg:max-h-[530px] justify-between w-full">

        <div className="left ml-2">

          <div className="tracking-wider text-left w-full">
            <span className='mb-2 font-semibold'>     Skills & Technologies </span>
            <h1 className="text-left font-title title gradient-text mb-5">
              TECH STACK
            </h1>
          </div>
          <div className="w-full flexCol  gap-2 text-left justify-start items-start">
            {skills.map((skill, i) => (

              <div key={`${skill}${i}`} className="text-left justify-start items-start tracking-wider  flexCol w-full ">

                <div>
                </div>
                <div className=" flexCol  gap-2">
                  <span className="text-lg uppercase  font-bold">{skill.skill}</span>
                  <div className="text-xs  text-slate-300 flex flex-wrap gap-4 ">
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
        <div className="flexCol gap-10 overflow-hidden swiper-animate px-5 pause-animate h-full">
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default SkillsSection
