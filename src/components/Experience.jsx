
import { Avatar } from './Avatar';

import {motion} from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
// import { framerMotionConfig } from "../config";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Float, MeshDistortMaterial, useScroll } from '@react-three/drei';
import { Background } from './Background';


export const Experience = (props) => {
  const [section, setSection] = useState(0)
  const { viewport } = useThree();
  const data = useScroll()


  const [characterAnimation, setCharacterAnimation] = useState('Breakdance')

  useEffect(() => {
  
    section === 0 ? setCharacterAnimation('Breakdance'): setCharacterAnimation('Falling')

  },[section])

  useFrame(() => {
   const curSection = Math.floor(data.scroll.current * data.pages);

   if(curSection !== section){
    setSection(curSection)
   }
    
  })

  return (
    <>
    <Background/>
    <ambientLight intensity={1.5}/>

    <motion.group 
        position={[0, -1, 3]}
        animate={"" + section}
        transition={{
          duration: 0.6
        }}
        variants={{
          0:{
            scaleX: 2.5,
            scaleY: 2.5,
            scaleZ: 2.5,
            y: -2
          },
          1:{
            y: -viewport.height -1.4,
            x: 1.5,
            scaleX: 2,
            scaleY: 2,
            scaleZ: 2,
          }
        }}
        >
          <Avatar animation={characterAnimation}/>
    </motion.group>
  
    <motion.group       
        position={[0, 0.5, 3]}
        animate={{
          z: section === 1 ? 0 : 3,
          y: section === 1 ? -viewport.height : 0.5,
        }}
        >
       
        <directionalLight intensity={0.4} position={[-5,3,5]}/>
        <Float>
          <mesh position={[1,-3,-15]} scale={[2,2,2]}>
            <sphereGeometry/>
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
              
            />
          </mesh>
        </Float>

        <Float>
          <mesh position={[1,-3,-15]} scale={[2,2,2]}>
            <sphereGeometry/>
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
              
            />
          </mesh>
        </Float>

    </motion.group>
    </>
  );
};