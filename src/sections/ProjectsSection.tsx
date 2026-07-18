import { projects } from "../data/data"

const ProjectsSection = () => {
  return (
    <>
      <div className="text-center tracking-wider min-h-fit">
        <h1 className="font-title title gradient-text">
          PROJECTS
        </h1>
      </div>
      <div className="w-full flexCol  gap-8">
        {projects.map((project, i) => (
          <div  data-aos="flip-left" className={`h-60 py-5 w-3/4 ${i % 2 == 0 ? "bg-dark/30 text-white text-shadow-xl" 
            : "bg-light/30 self-end text-dark  "} border border-white/80 backdrop-blur-4xl  flex items-center  
          rounded-2xl px-6 gap-6 trackking-wider `}>
            <img src={project.image} alt="" className="rounded-xl object-cover object-ratio" />
            <div className="flexCol space-y-6 ">
              <h3 className="font-bold text-xl mb-2 tracking-wider mb-0"> {project.title}</h3>
              <p className={`${i %2 == 0 ? "text-white" : "text-slate-800"} text-sm tracking-wider`}>{project.tectStack.join(" | ")}</p>
              <div className="flex-center self-start justify-between w-full">
                <a target="_blank" href={project.liveDemo} className={`primary-btn btns `}>Demo</a>
                <a target="_blank" href={project.github} className={`btns  secondary-btn`}>Github</a>
              </div>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}

export default ProjectsSection
