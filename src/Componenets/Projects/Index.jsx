import React, { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Line, meshBounds, Text, Shadow, Image, useTexture, Html } from "@react-three/drei"
import "./Index.scss"

const data = [
  { img: "/1.jpg", name: "Techithon", dsc: "College Fest website with RazorPay integration where you can register for events", stack: "Node.js Express.js React.js MongoDB AWS" },
  { img: "/2.jpg", name: "Shop-N-Go", dsc: "A ML based self Checkout and ERP system for shops using python and Tensorflow", stack: "Python Tensorflow OpenCV " },
  { img: "/3.jpg", name: "Second Sight", dsc: "Andriod app that can identify day-to-day objects and give an audio output with voice command for visually impared", stack: "Java Python Tensorflow" },
  { img: "/4.jpeg", name: "BlockSafe", dsc: 'Product Authentication system  using BlockChain For Manufacturer Seller and Byer', stack: "Node.js Express.js Ethereum Solidity MySQL" }, 
  { img: "/5.jpg", name: "Abstract", dsc: "Market Place for Webgl Shaders and 3D-Models with Razorpay Integration", stack: "Node.js Express.js React.js MongoDB " },
  { img: "/6.jpeg", name: "Self Driving Car", dsc: "A self driving car that stays on one lane and can be controlled remotly", stack: " Python Raspberry Pi OpenCV Flask" } 
]

function TextImage({ index, num ,data}) {
  const ref = useRef()
  const w = 3.0

  useFrame(() => {
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, -num * 10, 0.1)
  })
  return (
    <group ref={ref}>
      <Text anchorX="left" position={[-0.5, w - 0.55, 0]} scale={2} color="white">
        0{index}
      </Text>
      <Text  position={[2.2 + data.name.length*0.2, w, 0]} scale={0.8} color="white" > 
        {data.name.toUpperCase()}
      </Text>
      <Text  position={[3.7, w - 0.6, 0]} scale={0.3} color="white" maxWidth="12">
        STACK : {data.stack}
      </Text>
      <Text position={[2.4, w - 5.1, 0]} scale={0.3} color="white" maxWidth="20">
        {data.dsc}
      </Text>
      <Image ref={ref} url={data.img} scale={[6, 3, 2]} position={[2.4, 0, 0]} />
    </group>
  )
}

function Rect({ position, scale, ...props }) {
  return (
    <group scale={scale}>
      <Line
        points={[-0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, -0.5, 0, -0.5, 0.5, 0]}
        color="white"
        linewidth={1}
        position={position}
      />
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function Marker({ numTwo, setTwo }) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [hovered, set] = useState(false)
  // const { sectionWidth } = useBlock()

  useEffect(() => void (document.body.style.cursor = hovered ? "grab" : "auto"), [hovered])
  useFrame(({ camera }) => {
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, (numTwo * 2) / -Math.PI, 0.1)
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, numTwo, 0.1)
    const s = THREE.MathUtils.lerp(ref.current.scale.x, active || hovered ? 1.5 : 0.75, 0.1)
    ref.current.scale.set(s, s, s)
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, active || hovered ? 0.6 : 0.75, 0.1)
    camera.updateProjectionMatrix()
  })

  return (
    <group ref={ref} position={[0, -3.5, 0]}>
      <Rect onPointerOver={(e) => (e.stopPropagation(), set(true))} onPointerOut={() => set(false)} />
    </group>
  )
}

function Dot({ index, num, setone }) {
  const [hovered, set] = useState(false)

  // const { offset, sectionWidth } = useBlock()
  useFrame(() => {})
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  return <Rect scale={0.15} onPointerOver={() => set(true)} onPointerOut={() => set(false)} onClick={() => setone(index)} />
}
function Images({ num }) {
  return data.map((data, index) => (
    <mesh key={index} position={[index * 10, 0, 0]}>
      <TextImage index={index} num={num} data={data}/>
    </mesh>
  ))
}

function Map({ num, setone }) {
  return new Array(6).fill().map((img, index) => (
    <mesh key={index} position={[index, -3.5, 0]}>
      <Dot index={index} {...{ num, setone }} />
    </mesh>
  ))
}

export default function Project() {
  const [numoff, setoff] = useState(0)

  return (
    <group position={[-2.4, -42, 0]}>
      <Marker numTwo={numoff} setTwo={setoff} />
      <Map num={numoff} setone={setoff} />
      <Images num={numoff} />
    </group>
  )
}

export function ProjectTitle() {
  return (
    <>
      <div className="Project-Title">
        <div id="upper-line"></div>
        <h1 id="title">Projects</h1>
        <div id="bottom-line"></div>
      </div>
    </>
  )
}
