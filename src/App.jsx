import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {ScrollControls, Scroll} from "@react-three/drei"
import Interface from "./components/Interface";
import { Suspense, useState } from "react";
import ScrollManager from "./components/ScrollManager";
import { Leva } from "leva";
import { MotionConfig } from "framer-motion";
import Menu from "./components/Menu";
import { LoadingScreen } from "./components/LoadingScreen";



function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [start, setStart]= useState(true)

  return (
    
    <>
    <MotionConfig 
        transition={{
          type:"spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
    >
          <Canvas shadows camera={{ position: [0, 3, 10],  fov: 42 }}>
                <color attach="background" args={["#000000"]} />

                    <ScrollControls pages={5} damping={0.1}>
                      <ScrollManager section={section} onSectionChange={setSection}/>
                         <Scroll>
                          <Suspense fallback={null}>
                          {start && <Experience section={section}/>}
                          </Suspense>
                       
                         
                        </Scroll>
                        <Scroll html> 
                        <Suspense fallback={null}>
                          {start &&  <Interface setSection={setSection}/>}
                          </Suspense>
                         
                        </Scroll>
                    </ScrollControls>
              </Canvas>

              <Suspense fallback={null}>
                          {start &&    <Menu onSectionChange={setSection} 
                    section={section} 
                    menuOpened={menuOpened}
                    setMenuOpened= {setMenuOpened}
                    />}
                          </Suspense>
           
    </MotionConfig> 
    <Leva hidden/>
      <LoadingScreen started={start} onStarted={() => setStart(true)}/>
    </>

  );
}

export default App;