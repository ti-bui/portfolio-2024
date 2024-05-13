import {motion} from 'framer-motion'
import { GreetingSection } from './GreetingSection';
import {AboutSection} from './AboutSection'
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import {ContactSection} from './ContactSection'


const Section = (props) => {
    const {children} = props;

    return (
    <motion.section 
    className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col
    items-start justify-center
    `}
    initial={{
        opacity:0,
        y: 50,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition:{
            duration:0.5,
            delay: 0.1
        }
    }}
    >
        {children}
    </motion.section>)
}


const Interface = () => {
  return (
 
            <div className="flex flex-col items-center w-screen">
            <GreetingSection Section={Section}/>
            <AboutSection Section={Section}/>
            <SkillsSection  Section={Section}/>
            <ProjectsSection Section={Section}/>
            <ContactSection Section={Section}/>
            </div>



  )
}

export default Interface;





