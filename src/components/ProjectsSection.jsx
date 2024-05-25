import { projects } from "./Data"

export const ProjectsSection = (props) => {

    const {Section} = props

    return (
    <Section >
    <section className='h-full w-full flex flex-col'>
        <h2 className="text-6xl md:text-8xl mb-10 font-bold text-[#FFFFF0]">Projects</h2>

        <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
            {projects.map((project, index) => (
            <article key={index} className=' w-full h-full
           border-2 border-[#9d9d9d84] flex flex-col bg-black
               '>
                    <img src={project.thumbnail} alt="project's thumbnail"/>
                    
                    <div className='md:w-[25rem] md:h-[21rem] overflow-hidden p-6 gap-6
                                flex flex-col justify-between items-left ' >
                        <h5 className='text-xl text-[#b3ff7d] font-bold'>{project.title}</h5>
                        <h5 className="sm:hidden md:block text-base text-[#848484] leading-7 ">
                             {project.description}</h5>
                        <h5 className="sm:hidden md:block text-base text-[#d4eeff]"><span className="font-bold leading-6 underline">Tech Stack:</span> {project.tech_stack}</h5>
                        <div className="flex h-full w-full flex-row gap-8">
                            <div className="h-fit w-fit p-2 border-[1px] text-black
                                            hover:bg-[#F16529] bg-blue-600 rounded-md border-[#424242] hover:text-black">
                                <a target="_blank" href={project.url}>View Live</a>
                            </div>
                            <div className="h-fit w-fit p-2 border-[1px] text-black
                                            hover:bg-[#F16529] bg-blue-600 rounded-md border-[#424242] hover:text-black">
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