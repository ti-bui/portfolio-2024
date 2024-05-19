import { projects } from "./ProjectsData"
import {motion} from 'framer-motion'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectsSection = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const {Section} = props

    return (
    <Section >
    <section className='sm:hidden md:hidden xl:block h-full w-full flex flex-col justify-start items-start'>
        <h2 className="text-6xl md:text-8xl mb-6 font-bold text-[#FFFFF0]">Projects</h2>

        <motion.section className='flex flex-col md:flex-row 
        md:flex-wrap md:justify-between'
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
            pb-4 overflow-hidden border-[1px] mb-4 border-[#fffff084]
            flex flex-col justify-center bg-black shadow-sm	shadow-red-100 
               '>
                    <div >
                        <img className='w-72' src={project.thumbnail} alt="dance robo thumbnail"/>
                    </div>
                    <div className='text-[#FFFFF0] px-4 pt-4 gap-2 flex flex-col'>
                        <h5 className='text-xl text-[#FFFFF0] font-bold'>{project.title}</h5>
                        <h5>Tech stack: {project.tech_stack}</h5>
                        <div className="h-fit w-fit p-2 border-[1px] text-[#FFFFF0]
                                         hover:bg-[#F16529] border-[#FFFFF0] hover:text-black">
                            <a href={project.url}>View Live</a>
                        </div>
                    </div>
            </article>
            ))}
        </motion.section>
    </section>

{/* //Mobile */}
    <section className='sm:block lg:hidden flex flex-col w-80 h-full
                        justify-center items-center gap-8'>
        <h2 className="text-6xl md:text-8xl mb-24 font-bold text-[#FFFFF0]">Projects</h2>
        <Slider {...settings}>
        {projects.map((project, index) => (
                <article key={index} className='
                pb-4 overflow-hidden border-[1px] mb-8 border-[#FFFFF0]
                flex flex-col justify-center shadow-md	shadow-lime-100
                '>
                        <div >
                            <img className='w-80' src={project.thumbnail} alt=" thumbnail"/>
                        </div>
                        <div className='text-[#FFFFF0] px-4 pt-4 gap-4 flex flex-col'>
                            <h5 className='text-xl text-[#FFFFF0] font-bold'>{project.title}</h5>
                            <h5>Tech stack: {project.tech_stack}</h5>
                            <div className="h-fit w-fit p-2 border-[1px] text-[#FFFFF0]
                                            hover:bg-[#F16529] border-[#FFFFF0] hover:text-black">
                                <a href={project.url}>View Live</a>
                            </div>
                        </div>
                </article>
                ))}
        </Slider>
        <motion.section className='flex flex-row w-fit gap-2'
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
              
            </motion.section>
    </section>
    </Section>
    )}