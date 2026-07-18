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
          // data-aos="flip-left" 
          <div  className={`${i % 2 == 0 ? "bg-dark/30 text-white text-shadow-xl" 
            : "bg-light/30 self-end text-dark"} 
          h-fit w-full lg:w-4/5 xl::w-2/3 lg:h-60 py-5 px-6 gap-6 
            border border-white/80 backdrop-blur-4xl flex flex-col md:flex-row items-center rounded-2xl trackking-wider `}>
            <img src={project.image} alt="" className="rounded-xl object-cover object-ratio  w-full md:w-1/2" />
            <div className="flexCol space-y-6 max-w-full">
              <h3 className="font-bold  text-xl mb-2 tracking-wider "> {project.title}</h3>
              <p className={`${i %2 == 0 ? "text-white" : "text-slate-800"} text-sm  tracking-wider`}>{project.tectStack.join(" | ")}</p>
              <div className="flex-center self-start justify-start gap-3 lg:justify-center w-full">
                <a target="_blank" href={project.liveDemo} className={`primary-btn btns md:py-2 md:px-3 w-25  md:w-20 text-center`}>Demo</a>
                <a target="_blank" href={project.github} className={`btns  secondary-btn md:ml-0 md:py-2 md:px-3 w-25 md:w-20 text-center`}>Github</a>
              </div>
            </div>
          </div>

        ))}
      </div> 
    </>
  )
}

export default ProjectsSection
