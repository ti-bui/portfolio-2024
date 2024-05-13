import { projects } from "./ProjectsData"
import {motion} from 'framer-motion'


export const ProjectsSection = (props) => {
    const {Section} = props
    return (
    <Section>
    <section className='flex flex-col gap-8'>
        <h2 className="text-8xl mb-2 font-bold text-black">Projects</h2>

        <motion.section className='flex flex-row gap-1 flex-wrap justify-between'
            initial={{
                opacity:0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                    duration: 1.5,
                    delay: 0.6
                }
            }}
        >
            {projects.map((project, index) => (
            <article key={index} className='
            pb-4 overflow-hidden border-[1px] mb-8 border-black
            flex flex-col justify-center
               '>
                    <div >
                        <img className='w-80' src={project.thumbnail} alt="dance robo thumbnail"/>
                    </div>
                    <div className='text-black px-4 pt-4 gap-4 flex flex-col'>
                        <h5 className='text-xl text-black font-bold'>{project.title}</h5>
                        <h5>Tech stack: {project.tech_stack}</h5>
                        <div className="h-fit w-fit p-2 border-[1px] text-black
                                         hover:bg-[#F16529] border-black hover:text-black">
                            <a href={project.url}>View Live</a>
                        </div>
                    </div>
            </article>
            ))}
        </motion.section>
       
   
    </section>
    </Section>
    )}