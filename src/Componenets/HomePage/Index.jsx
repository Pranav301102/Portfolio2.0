import * as THREE from "three"
import { useLayoutEffect, useMemo, useRef,useState,useCallback,useEffect } from "react"
import {  useThree, useFrame } from "@react-three/fiber"
import {  useTexture,useScroll,ScrollControls,Scroll,Merged} from "@react-three/drei"
import Typewriter from "typewriter-effect"
import { a } from "@react-spring/three"

import DistortionMaterial from "../../DistortionMaterial"
import {  Box, } from "../../Styles"


const square = new THREE.PlaneBufferGeometry(10,20,256,256)

const material1 = new DistortionMaterial()



function Shape({ geometry, material, args, textures, opacity, color ,rotate, pos , shadowScale = [9, 1.5, 1], ...props }) {
  const ref = useRef()
  const { mouse, clock } = useThree()
  const [ao, normal, height, roughness] = textures
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  useFrame(() => {
    if (ref.current) {
      rEuler.set((-mouse.y * Math.PI) / 50, (mouse.x * Math.PI) / 30, rotate)
      ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
      ref.current.material.time = clock.getElapsedTime() * 3
    }
  })
  return (
    <group {...props}>
      <mesh
        position={pos}
        ref={ref}
        args={args}
        geometry={geometry}
        material={material}
        material-color="white"
        material-aoMap={ao}
        material-normalMap={normal}
        material-displacementMap={height}
        material-roughnessMap={roughness}
        material-opacity={opacity}
      />
    </group>
  )
}

export function Shapes({scroll, onScrollChange}){
  const scrollData = useScroll();
  const handleScrollChange = useCallback(event => {
    onScrollChange(event)
  }, [onScrollChange])
  useFrame(()=>{
    handleScrollChange(scrollData.offset)
    // if(scrollData.offset>0.10){
    //   handleScrollChange(false)
    // }
    // else{handleScrollChange(true)}
  })
  const textures = useTexture(["/ao.jpg", "/normal.jpg", "/height.png", "/roughness.jpg"])
  useLayoutEffect(() => {
    textures.forEach((texture) => ((texture.wrapT = texture.wrapS = THREE.RepeatWrapping), texture.repeat.set(4, 4)))
  }, [textures])
  return(
    <group >
          <Shape geometry={square} material={material1} textures={textures} opacity={[1]} pos={[-3.3,4,0]} rotate = {[-Math.PI / 3]}/>
          <Shape geometry={square} material={material1} textures={textures} opacity={[1]} pos={[0,-13.5,0]} rotate = {[-Math.PI / 1.9]}/>
    </group>
  )
}

export function Text() {
  
  // Animated shape props
  
  return (
    <Box >
      <h1>Hey</h1>
      <h1>I am Pranav</h1>
      <Typewriter
              options={{
                strings: ["Full Stack Developer", "Crypto Enthusiast", "Student"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
    </Box>
  )
}

