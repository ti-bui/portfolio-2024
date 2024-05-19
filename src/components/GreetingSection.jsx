import {motion} from 'framer-motion'

export const GreetingSection = (props) => {
    const {Section} = props

    return (
    <Section>
        <motion.div 
        className='flex flex-row h-full w-full justify-center items-center'
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
        >
            <div className='flex flex-col w-fit h-fit '>
                <h1 className="md:text-9xl sm:text-6xl 
                font-bold text-[#FFFFF0]">Hi, I'm Ti
                </h1>
                <h1 className='md:text-9xl sm:text-6xl 
                font-bold text-[#FFFFF0] sm:mt-10'>Full Stack Engineer</h1>
            </div>

        </motion.div>
    </Section>
    )
}