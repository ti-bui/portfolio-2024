import { projects } from "./Data"

export const ProjectsSection = (props) => {

    const {Section} = props

    return (
    <Section >
    <section className='h-full w-full flex flex-col'>
        <h2 className="text-6xl md:text-8xl mb-10 font-bold text-[#FFFFF0]">Projects</h2>

        <div className='flex flex-col md:flex-row gap-10 md:gap-4'>
            {projects.map((project, index) => (
            <article key={index} className=' w-full h-full
           border-2 border-[#9d9d9d84] flex flex-col bg-black
               '>
                    <img src={project.thumbnail} alt="project's thumbnail"/>
                    
                    <div className='text-[#FFFFF0] gap-4 flex flex-col md:gap-4 p-4 md:p-2 justify-center'>
                        <h5 className='text-xl text-[#b3ff7d] font-bold'>{project.title}</h5>
                        <h5 className="text-base text-[#d4eeff]">
                             {project.description}</h5>
                        <h5 className="text-base  text-[#848484]"><span className="font-bold underline">Tech Stack:</span> {project.tech_stack}</h5>
                        <div className="flex h-full w-fulls flex-row gap-8">
                            <div className="h-fit w-fit p-2 border-[1px] text-[#848484]
                                            hover:bg-[#F16529] border-[#424242] hover:text-black">
                                <a target="_blank" href={project.url}>View Live</a>
                            </div>
                            <div className="h-fit w-fit p-2 border-[1px] text-[#848484]
                                            hover:bg-[#F16529] border-[#424242] hover:text-black">
                                <a target="_blank" href={project.github}>View Code</a>
                            </div>
                        </div>
                       
                    </div>
            </article>
            ))}
        </div>
    </section>

    </Section>
    )}