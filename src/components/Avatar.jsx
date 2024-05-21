import React, { useEffect, useRef } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'



export function Avatar(props) {
const {animation} = props 

  const group = useRef()
  const { nodes, materials } = useGLTF('models/rpm-avatar.glb')
  const {animations: breakdanceAnimation} = useFBX("animations/breakdance.fbx")
  const {animations: fallingAnimation} = useFBX("animations/Falling-Idle.fbx")
  const {animations: poseAnimation} = useFBX("animations/pose.fbx")
  

  breakdanceAnimation[0].name = "Breakdance"
  fallingAnimation[0].name = "Falling"
  poseAnimation[0].name = "Pose"

 const {actions} = useAnimations(
    [ breakdanceAnimation[0], fallingAnimation[0], poseAnimation[0]], 
    group)

  useEffect(() => {
    actions[animation].reset().play();
    return () => {
      actions[animation].reset().stop();
    };
  },[actions]);



  return (
    <group {...props} ref={group} dispose={null}>
        <group rotation-x={-Math.PI/2}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                frustumCulled={false}
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                frustumCulled={false}
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                frustumCulled={false}
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                frustumCulled={false}
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
             frustumCulled={false}
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    </group>
  
  )
}

useGLTF.preload('models/rpm-avatar.glb')
