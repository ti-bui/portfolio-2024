import DanceRobo from '../assets/images/dance-robo.png'
import Moon from '../assets/images/moon.png'
import Mars from '../assets/images/mars.png'
import FoxInGalaxy from '../assets/images/fox-in-galaxy.png'
import Neptune from '../assets/images/neptune.png'
import WalkMan from '../assets/images/walk-man.png'
import SphereTexture from '../assets/images/sphere-texture.png'
import SixCubes from '../assets/images/6cubes.png'
import { useThree } from '@react-three/fiber'
import {motion} from "framer-motion-3d"
import { Image } from '@react-three/drei'


export const projects =[
    {
        title: "Dance Robot",
        project_type: "3D Code",
        thumbnail: DanceRobo,
        tech_stack: "Threejs, JavaScript",
        url: "https://dance-robo.vercel.app/"
    },
    
    {
        title: "Neptune",
        project_type: "3D Code",
        thumbnail: Neptune,
        tech_stack: "Threejs, JavaScript",
        url: "https://neptune-nu.vercel.app/"
    },
 
    {
        title: "Moon",
        project_type: "3D Code",
        thumbnail: Moon,
        tech_stack: "Threejs, JavaScript",
        url: "https://m00nie.vercel.app/"
    },
    {
        title: "Mars",
        project_type: "3D Code",
        thumbnail: Mars,
        tech_stack: "Threejs, JavaScript",
        url: "https://mvrs-mars.vercel.app/"
    },
    {
        title: "Fox In Galaxy",
        project_type: "3D Code",
        thumbnail: FoxInGalaxy,
        tech_stack: "Threejs, JavaScript",
        url: "https://fox-in-galaxy.vercel.app/"
    },
    {
        title: "6 Cubes",
        project_type: "3D Code",
        thumbnail: SixCubes,
        tech_stack: "Threejs, JavaScript",
        url: "https://3d-6cubes.vercel.app/"
    },
    {
        title: "Sphere Texture",
        project_type: "3D Code",
        thumbnail: SphereTexture,
        tech_stack: "Threejs, JavaScript",
        url: "https://sphere-textures.vercel.app/"
    },
    {
        title: "Walk Man",
        project_type: "3D Code",
        thumbnail: WalkMan,
        tech_stack: "Threejs, JavaScript",
        url: "https://walk-man.vercel.app/"
    },
]

// const Project = (props) => {
//     const {project} = props

//     return (
//         <group {...props}>
//             <mesh>
//                 <planeGeometry args={[2.2,2]}/>
//                 <meshBasicMaterial color="black" transparent opacity={0.4}/>
//             </mesh>

//             <Image scale={[2,1.2,1]} url={project.thumbnail} 
//                     toneMapped={false} position-y={0.3}/>

//             <Text maxWidth={2} anchorX={"left"} 
//             anchorY={"top"} fontSize={0.2} 
//             position={[-1, -0.4, 0]}
//             >{project.title}</Text>
//         </group>
//     )
// }


// export const Projects = () => {
//     const {viewport} = useThree();

//     return (
//         <group position-y={-viewport.height * 3 }>

//             {projects.map((project, index) => (
//                 <motion.group key={"project" + index}>
//                     <Project project={project}/>
//                 </motion.group>
//             ))}

   
    
//         </group>
//     )
// }