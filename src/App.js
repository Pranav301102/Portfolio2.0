import * as THREE from "three"
import { Suspense, Children, useLayoutEffect, useMemo, useRef,useState,useCallback,useEffect } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { ContactShadows, Loader, useTexture,useScroll,ScrollControls,Scroll} from "@react-three/drei"
import { useSpring } from "@react-spring/core"
import { a } from "@react-spring/three"

import DistortionMaterial from "./DistortionMaterial"
import { Container, Home } from "./Styles"
import SphereTxt from "./Componenets/SphereText/Index"
import { Shapes,Text } from "./Componenets/HomePage/Index"
import AboutME from "./Componenets/About/Index"
import Fooback from "./Componenets/Footer/Index"
import Project from './Componenets/Projects/Index';
import Skills from "./Componenets/Skills/Index"
import Stars from "./Componenets/Stars/Index"


function Background({ color }) {
  const scroll = useScroll()
  const tcolor = new THREE.Color()
  useFrame(( gl ) => {
    
    if(scroll.offset<0.10){
      gl.scene.background.lerp(tcolor.set( "rgb(255, 255, 255,0)"), 0.05)
    }
    else if(scroll.offset>0.10 && scroll.offset<0.42){
      gl.scene.background.lerp(tcolor.set( "rgba(255,255,255,1)"), 0.05)
    }
    else if(scroll.offset>0.40 && scroll.offset<0.85){
      gl.scene.background.lerp(tcolor.set( "rgba(0,34,77,1)"), 0.05)
    }
    else{
      gl.scene.background.lerp(tcolor.set( "rgb(0, 0, 0,2)"), 0.05)
    }
    
  });
  return (
    <color attach="background" args={[color]} />
  )
}

export default function App() {
  
  const [scroll, setScroll] = useState(0)

  const props = useSpring({
    opacity : scroll<0.10 ? 1:0
  })
  
  return (
    <>
      <Container style={props}>  
        <Text />
      </Container>
      <Canvas  camera={{ position: [0, 0, 10], fov: 50 }}>
      <ScrollControls damping={0.5} pages={7}>   
        <spotLight position={[-10, 30, 40]} />
        <spotLight position={[-60, 30, 40]} />
        <fog attach="fog" args={['white', 10, 20]} />
        {scroll>0.40 &&
          <Background/>
        }
        <Scroll>
        <Suspense fallback={null}>
          <Shapes  scroll={scroll} onScrollChange={setScroll}/>
          <SphereTxt/>
          <Fooback/>
          <Project/>
          <Stars position={[-35,-35,-7]}/>
        </Suspense>
        </Scroll>
        <Scroll html>
        <Home/>
        <AboutME/>
        <Skills/>
        </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader />
    </>
  )
}
