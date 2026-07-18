import {services} from '../data/data';
import VideoLayout from '../layout/VideoLayout';

const AboutSection = () => {
  return (
    <VideoLayout id={"about"}>
    
      <div className="flex-center gap-20 flex-col md:flex-row  ">
        <div className="w-1/3 p-5">
          <img src="/profile-photo.jpg" alt="profile photo" className=" rounded-full border-dark border hover:border-3 hover:border-light hover:shadow-lg hover:shadow-light hover:scale-105 duration-500" />
        </div>
        <div className="w-2/3 tracking-wider">
          <span className='mb-2 font-semibold'>  Crafting interfaces people love to use</span>
          <h2 className="text-left font-title title gradient-text">
            ABOUT ME
          </h2>
          <p className=' tracking-wide font-semibold'>
            I'm Rua'a Faroun — a frontend developer who cares about the details. I build responsive, interactive interfaces with React, Next.js, and TypeScript, and I enjoy the part where a design goes from static mockup to something that feels alive in the browser.


            </p>
        </div>
      </div>
      <div className="mt-10 w-full flexCol md:flex-row flex-center gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {services.map((service, i) => (

          <div key={`${service}${i}`} className="tracking-wider about-card items-center flexCol w-full flex-center">
            <div className="icon mb-3 ">
              <div dangerouslySetInnerHTML={{ __html: service.icon }} />
            </div>
            <div>
            </div>
            <div className=" flexCol flex-center gap-2">
              <span className="text-sm font-bold">{service.tech}</span>
              <span className="text-xs  text-slate-300 ">
                {service.skills.join(", ")}
              </span>
            </div>
          </div>

        ))}
      </div>
    </VideoLayout>
  )
}

export default AboutSection
