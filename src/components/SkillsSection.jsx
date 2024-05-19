import JavaScript from '../assets/icons/javascript.svg'
import Python from '../assets/icons/python.svg'
import Html from '../assets/icons/html.svg'
import Nodejs from '../assets/icons/nodejs.svg'
import Css from '../assets/icons/css.svg'
import Typescript from '../assets/icons/typescript.svg'
import Tailwindcss from '../assets/icons/tailwind-css.svg'
import Reactjs from '../assets/icons/react-js.svg'
import Nextjs from '../assets/icons/nextjs.svg'
import Aws from '../assets/icons/aws.svg'
import PostgreSQL from '../assets/icons/postgresql.svg'
import Sass from '../assets/icons/sass.svg'
import Threejs from '../assets/icons/threejs.svg'
import Gsap from '../assets/icons/gsap.svg'
import FramerMotion from '../assets/icons/framer-motion.svg'
import Blender from '../assets/icons/blender.svg'
import Figma from '../assets/icons/figma.svg'
import {motion} from 'framer-motion'
import { useState } from 'react'

export const SkillsSection = (props) => {
    const [workingBtnClicked, setWorkingBtnClicked] = useState(false)
    const [exposedBtnClicked, setExposedBtnClicked] = useState(false)
    const [allBtnClicked, setAllBtnClicked] = useState(true)
    
    const {Section} = props

    const handleExposedBtnClicked = () => {
            setWorkingBtnClicked(false)
            setExposedBtnClicked(true)
            setAllBtnClicked(false)
    }

    const handleWorkingBtnClicked = () => {
        setExposedBtnClicked(false)
        setWorkingBtnClicked(true)
        setAllBtnClicked(false)
    }

    const handleAllBtnClicked = () => {
        setExposedBtnClicked(false)
        setWorkingBtnClicked(false)
        setAllBtnClicked(true)
}

    
    return (
    <Section>
    <motion.article
     initial={{
        opacity:0,
        y: 50,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.7,
            delay: 0.6
        }
    }}
    className='flex flex-col w-full lg:w-[80%] gap-12 h-full mt-24 justify-center'>
        <div className='flex flex-col h-[20%]'>
            <motion.h2 
                initial={{
                    opacity:0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition:{
                        duration: 1,
                        delay: 0.6
                    }
                }}
            className="text-6xl md:text-8xl mb-8 md:mb-2 font-bold text-[#FFFFF0]">Tech Stack</motion.h2>
            <motion.div 
                     initial={{
                        opacity:0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition:{
                            duration: 1.2,
                            delay: 0.6
                        }
                    }}
            className="flex flex-row w-full gap-2 md:gap-6 mb-2 md:mb-10">
                <button onClick={handleAllBtnClicked}  className={`w-32 focus:bg-[#B2FFB1] 
                focus:text-black h-fit border-2 py-1
                rounded-md border-white text-black
                hover:bg-[#B2FFB1] hover:text-black ${allBtnClicked ? 'bg-[#B2FFB1]' : ''} 
                ${allBtnClicked ? 'text-black' : 'text-white'}`}>All</button>
                <button onClick={handleWorkingBtnClicked} 
                 className={`w-32 focus:bg-[#B2FFB1] 
                 focus:text-black h-fit border-2 py-1
                 rounded-md border-white text-black
                 hover:bg-[#B2FFB1] hover:text-black ${workingBtnClicked ? 'bg-[#B2FFB1]' : ''} 
                 ${workingBtnClicked ? 'text-black' : 'text-white'}`}>Working</button>
                <button onClick={handleExposedBtnClicked} className={`w-32 focus:bg-[#B2FFB1] 
                focus:text-black h-fit border-2 py-1
                rounded-md border-white text-black
                hover:bg-[#B2FFB1] hover:text-black ${exposedBtnClicked ? 'bg-[#B2FFB1]' : ''} 
                ${exposedBtnClicked ? 'text-black' : 'text-white'}`}>Exposed To</button>
            </motion.div>
        </div>
  
        <motion.div 
              initial={{
                opacity:0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                    duration: 1.2,
                    delay: 0.6
                }
            }}
        
        className='h-[80%]'>
            {workingBtnClicked && <div className='flex flex-row gap-8 md:gap-20 w-full flex-wrap'>
                <img className='w-12 md:w-20' src={JavaScript} alt="javascript" />
                <img className='w-12 md:w-20' src={Html} alt="html" />
                <img className='w-12 md:w-20' src={Css} alt="css" />
                <img className='w-12 md:w-20' src={Python} alt="python" />
                <img className='w-12 md:w-20' src={Nextjs} alt="nextjs" />
                <img className='w-12 md:w-20' src={Reactjs} alt="reactjs" />
                <img className='w-12 md:w-20' src={Nodejs} alt="nodejs" />
                <img className='w-12 md:w-20' src={Tailwindcss} alt="tailwindcss" />
                <img className='w-12 md:w-20' src={Typescript} alt="typescript" />
                <img className='w-12 md:w-20' src={PostgreSQL} alt="postgresql" />
            </div>}

            {exposedBtnClicked && 
            <div className='flex flex-row gap-8 md:gap-20 w-full flex-wrap'>
                <img className='w-12 md:w-20' src={Aws} alt="aws" />
                <img className='w-12 md:w-20' src={Sass} alt="sass" />
                <img className='w-12 md:w-20' src={Threejs} alt="threejs" />
                <img className='w-12 md:w-20' src={FramerMotion} alt="framer-motion" />
                <img className='w-12 md:w-20' src={Gsap} alt="gsap" />
                <img className='w-12 md:w-20' src={Blender} alt="blender" />
                <img className='w-12 md:w-20' src={Figma} alt="figma" />
            </div>}

            {allBtnClicked && <div className='flex flex-row gap-8 md:gap-20 w-full flex-wrap'>
                <img className='w-12 md:w-20' src={JavaScript} alt="javascript" />
                <img className='w-12 md:w-20' src={Python} alt="python" />
                <img className='w-12 md:w-20' src={Html} alt="html" />
                <img className='w-12 md:w-20' src={Nodejs} alt="nodejs" />
                <img className='w-12 md:w-20' src={Css} alt="css" />
                <img className='w-12 md:w-20' src={Sass} alt="sass" />
                <img className='w-12 md:w-20' src={Threejs} alt="threejs" />
                <img className='w-12 md:w-20' src={FramerMotion} alt="framer-motion" />
                <img className='w-12 md:w-20' src={Gsap} alt="gsap" />
                <img className='w-12 md:w-20' src={Typescript} alt="typescript" />
                <img className='w-12 md:w-20' src={Tailwindcss} alt="tailwindcss" />
                <img className='w-12 md:w-20' src={Nextjs} alt="nextjs" />
                <img className='w-12 md:w-20' src={Reactjs} alt="reactjs" />
                <img className='w-12 md:w-20' src={Aws} alt="aws" />
                <img className='w-12 md:w-20' src={PostgreSQL} alt="postgresql" />
                <img className='w-12 md:w-20' src={Blender} alt="blender" />
                <img className='w-12 md:w-20' src={Figma} alt="figma" />
            </div>}

        </motion.div>
      
    </motion.article>
    </Section>
    )
}