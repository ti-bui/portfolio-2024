import {motion} from 'framer-motion'

export const AboutSection = (props) => {
    const {Section, setSection} = props
    
    return (
    <Section>
        <motion.div
              initial={{
                opacity:0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                    duration: 0.5,
                    delay: 0.6
                }
            }}
        className="flex flex-col md:gap-10 gap-6 ">
            <motion.h2 
                   initial={{
                    opacity:0,
                    y:50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition:{
                        duration: 1,
                        delay: 0.6
                    }
                }}
            
            className="text-6xl md:text-8xl font-bold text-[#FFFFF0]">About Me
            </motion.h2>
            <motion.h3 
                    initial={{
                        opacity:0,
                        y:50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition:{
                            duration: 1.1,
                            delay: 0.6
                        }
                    }}
            className="text-2xl md:text-4xl font-bold text-[#f1ff97]">an ENGINEER with a 
            <br/>
            background in PHOTOGRAPHY</motion.h3>
            <motion.div 
                    initial={{
                        opacity:0,
                        y:50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition:{
                            duration: 1.2,
                            delay: 0.6
                        }
                    }}
            className="w-full md:w-[45%]">
                <p className="text-[#ffffff] text-xl leading-relaxed">
                With 3 years of experience in the art industry, I've built a strong 
                foundation in visual design. Transitioning into tech, I'm grateful to 
                leverage this experience, developing into an engineer proficient not 
                only in coding but also in design thinking for UX/UI enhancement.
                    </p>
            </motion.div>
            <button 
            onClick={() => {setSection(4)}}
            className="w-24 h-fit bg-violet-300 hover:bg-violet-100
            text-base font-bold text-black py-3 rounded-md">Contact</button>
        </motion.div>
     
    </Section>
    )
}