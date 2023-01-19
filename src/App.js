import * as THREE from "three"
import { Suspense, Children, useLayoutEffect, useMemo, useRef,useState,useCallback,useEffect } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { ContactShadows, Loader, useTexture,useScroll,ScrollControls,Scroll} from "@react-three/drei"
import { useSpring } from "@react-spring/core"
import { a } from "@react-spring/three"

import DistortionMaterial from "./DistortionMaterial"
import { Container, Nav, Box, Line, Cover } from "./Styles"
import SphereTxt from "./SphereText/SphereText"
import { Shapes,Text } from "./Componenets/HomePage/Home"





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
  
  const [scroll, setScroll] = useState(true)
  const props = useSpring({
    opacity : scroll ? 1:0
  })
  
  return (
    <>
      <Container style={props}>  
        <Text />
      </Container>
      <Canvas  camera={{ position: [0, 0, 20], fov: 50 }}>
      <ScrollControls damping={4} pages={4.8}>   
        <spotLight position={[-10, 30, 40]} />
        <spotLight position={[-60, 30, 40]} />
        <fog attach="fog" args={['white', 20, 30]} />
        <Scroll>
        <Suspense fallback={null}>
          <Shapes  scroll={scroll} onScrollChange={setScroll}/>
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
