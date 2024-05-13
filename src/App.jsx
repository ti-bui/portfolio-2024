import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {ScrollControls, Scroll} from "@react-three/drei"
import Interface from "./components/Interface";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";
import { Leva } from "leva";
import { MotionConfig } from "framer-motion";
import Menu from "./components/Menu";


function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
 
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
                            <Experience section={section}/>
                        </Scroll>
                        <Scroll html> 
                          <Interface/>
                        </Scroll>
                    </ScrollControls>
              </Canvas>
              <Menu onSectionChange={setSection} 
                    section={section} 
                    menuOpened={menuOpened}
                    setMenuOpened= {setMenuOpened}
                    />
    </MotionConfig> 
    <Leva hidden/>
    </>

  );
}

export default App;