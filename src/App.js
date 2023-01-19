import * as THREE from "three"
import { Suspense, Children, useLayoutEffect, useMemo, useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { ContactShadows, Loader, useTexture,useScroll,ScrollControls,Scroll} from "@react-three/drei"
import { useSpring } from "@react-spring/core"
import { a } from "@react-spring/three"

import DistortionMaterial from "./DistortionMaterial"
import { Container, Nav, Box, Line, Cover } from "./Styles"
import SphereTxt from "./SphereText/SphereText"

const square = new THREE.PlaneBufferGeometry(20,43,254,254)

const material1 = new DistortionMaterial()



function Shape({ geometry, material, args, textures, opacity, color, shadowScale = [9, 1.5, 1], ...props }) {
  const ref = useRef()
  const { mouse, clock } = useThree()
  const [ao, normal, height, roughness] = textures
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  useFrame(() => {
    if (ref.current) {
      rEuler.set((-mouse.y * Math.PI) / 50, (mouse.x * Math.PI) / 30, -Math.PI / 3)
      ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
      ref.current.material.time = clock.getElapsedTime() * 3
    }
  })
  return (
    <group {...props}>
      <a.mesh
        position={[-10,7,0]}
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

function Shapes() {
  
  const textures = useTexture(["/ao.jpg", "/normal.jpg", "/height.png", "/roughness.jpg"])
  useLayoutEffect(() => {
    textures.forEach((texture) => ((texture.wrapT = texture.wrapS = THREE.RepeatWrapping), texture.repeat.set(4, 4)))
  }, [textures])
  return(
    <group>
      
          <Shape geometry={square} material={material1} textures={textures} opacity={[1]} />
        
    </group>
  )
}

function Text({ opacity }) {
  return (
    <Box style={{ opacity }}>
      <h1>Hey</h1>
      <h1>I am Pranav</h1>
    </Box>
  )
}

function Background({ color }) {
  const scroll = useScroll()
  const tcolor = new THREE.Color()
  useFrame(( gl ) => {
    
    if(scroll.offset<0.10){
      gl.scene.background.lerp(tcolor.set( "rgb(255, 255, 255,1)"), 0.1)
    }
    else if(scroll.offset>0.10 && scroll.offset<0.25){
      gl.scene.background.lerp(tcolor.set( "rgba(227,253,253,1)"), 0.05)
    }
    else if(scroll.offset>0.25 && scroll.offset<0.85){
      gl.scene.background.lerp(tcolor.set( "rgba(0,34,77,1)"), 0.05)
    }
    else{
      gl.scene.background.lerp(tcolor.set( "rgb(0, 0, 0,2)"), 0.1)
    }
    
  });
  return (
    <color attach="background" args={[color]} />
  )
}

export default function App() {
  // Current route
  // Animated shape props
  const [location] = "/"
  // Animated shape props
  
  return (
    <>
      <Container>
           
        <Text opacity={[1]}/>
          
        
      </Container>
      <Canvas  camera={{ position: [0, 0, 20], fov: 50 }}>
      <ScrollControls damping={4} pages={4.8}>   
        <spotLight position={[-10, 30, 40]} />
        <spotLight position={[-60, 30, 40]} />
        <fog attach="fog" args={['white', 20, 30]} />
        <Scroll>
        <Suspense fallback={null}>
          <Shapes  />
          <SphereTxt/>
        </Suspense>
        </Scroll>
        <Scroll html>
        </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader />
    </>
  )
}
