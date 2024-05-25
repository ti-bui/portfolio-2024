import {skills} from './Data'
import {motion} from 'framer-motion'
import { useState } from 'react'

export const SkillsSection = (props) => {
    const [workingBtnClicked, setWorkingBtnClicked] = useState(true)
    const [exposedBtnClicked, setExposedBtnClicked] = useState(false)
    const [allBtnClicked, setAllBtnClicked] = useState(false)
    
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
    className='flex flex-col w-full lg:w-[60%] gap-12 h-full mt-24 justify-center'>
        <div className='flex flex-col h-[20%]'>
            <h2 
            className="text-6xl md:text-8xl mb-8 md:mb-2 font-bold text-[#FFFFF0]">Tech Stack</h2>
            <div        
            className="flex flex-row w-full gap-2 md:gap-6 mb-2 md:mb-6">
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
            </div>
        </div>
  
        <div 
            className='h-[80%]'>
            {workingBtnClicked && 
            <div className='flex flex-row gap-8 md:gap-10 w-full flex-wrap justify-left'>
               {skills.filter(skill => skill.isWorking).map((skill, index) => 
                (
                <div className='flex flex-col items-center justify-center gap-2' key={index} >
                            <img className='w-12 md:w-20' src={skill.logo} alt="skills logo" />
                            <p className='text-stone-200 text-sm'>{skill.name}</p>
                    </div>
                ))}
            </div>}

            {exposedBtnClicked && 
            <div className='flex flex-row gap-8 md:gap-10 w-full flex-wrap justify-left'>
                  {skills.filter(skill => !skill.isWorking).map((skill, index) => 
                (
                <div className='flex flex-col items-center justify-center gap-2' key={index} >
                        <img className='w-12 md:w-20' src={skill.logo} alt="skills logo" />
                        <p className='text-stone-200 text-sm'>{skill.name}</p>
                </div>
                ))}
            </div>}

            {allBtnClicked && <div className='flex flex-row gap-8 md:gap-10 w-full flex-wrap justify-left'>
                {skills.map((skill, index) => (
                    <div className='flex flex-col items-center justify-center gap-2' key={index} >
                            <img className='w-12 md:w-20' src={skill.logo} alt="skills logo" />
                            <p className='text-stone-200 text-sm'>{skill.name}</p>
                    </div>
                ))}
            </div>}

        </div>
      
    </motion.article>
    </Section>
    )
}