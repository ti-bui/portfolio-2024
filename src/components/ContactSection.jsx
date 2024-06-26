import GitHub from '../assets/icons/git.svg'
import Email from '../assets/icons/email.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Instagram from '../assets/icons/instagram.svg'

export const ContactSection = (props) => {
    const {Section} = props
    return (
    <Section >
        <div className='flex flex-col h-full w-full mb-32 md:mb-0 justify-end md:justify-center'>
                <h2 className="sm:text-6xl md:text-8xl mb-10 font-bold  text-black">Let's Connect</h2>
                <div className="flex flex-row w-full gap-10 md:gap-28">
                    <div className='hover:bg-[#B2FFB1] transition 
                    delay-150 duration-200 rounded-full
                    ease-in-out h-fit w-fit'>
                        <a target='_blank' href="https://github.com/ti-bui">
                            <img className='w-10 md:w-28' src={GitHub} alt="github" />
                        </a>
                    </div>
                    <div  className='hover:bg-[#B2FFB1] transition 
                    delay-150 duration-200 rounded-xl
                    ease-in-out md:h-[100px] w-fit'>
                        <a target='_blank' href="mailto:tibui.dev@gmail.com">
                            <img className='w-10 md:w-28' src={Email} alt="email" />
                        </a>
                    </div>
                    <div  className='hover:bg-[#B2FFB1] transition 
                    delay-150 duration-200 rounded-full
                    ease-in-out h-fit w-fit'>
                        <a target='_blank' href="https://www.linkedin.com/in/ti-bui/">
                            <img className='w-10 md:w-24' src={Linkedin} alt="linkedin" />
                        </a>
                    </div>
                    <div  className='hover:bg-[#B2FFB1] transition 
                    delay-150 duration-200 rounded-full
                    ease-in-out h-fit w-fit'>
                        <a target='_blank' href="https://www.instagram.com/badebum._/">
                            <img className='w-10 md:w-24' src={Instagram} alt="instagram" />
                        </a>
                    </div>

                </div>
        </div>
  
    </Section>
    )}