

export const AboutSection = (props) => {
    const {Section} = props
    
    return (
    <Section>
        <div className="flex flex-col gap-10">
            <h2 className="text-6xl md:text-8xl font-bold text-[#FFFFF0]">About Me
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#e1f944]">an ENGINEER with a 
            <br/>
            background in PHOTOGRAPHY</h3>
            <p className="text-[#FFFFF0] text-lg ">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text ever 
            <br/>
            since the 1500s, when an unknown printer took a galley of type and 
            <br/>
            scrambled it to make a type speci</p>
        </div>
     
    </Section>
    )
}