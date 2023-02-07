import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame ,useThree} from "@react-three/fiber";
import {
  Text,
  TrackballControls,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Group } from "three";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 0.4,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    // ref.current.quaternion.copy(camera.quaternion)
    ref.current.lookAt(0, 0, 100);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "grey"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 3, radius = 10 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    const things = ['React', 'JavaScript', 'AWS', 'Tensorflow','Python','Express.js','Java','Three.js','MongoDB','MySQL','ROS','Spring'];
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          things[Math.floor(Math.random()*things.length)]
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function SphereTxt() {
  const cloudref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport)
  let m =1
  if (w<7.0){
    m = -1
  }
  useFrame((state, delta) => {
    
    cloudref.current.rotation.x -= delta / 10;
    cloudref.current.rotation.y -= delta / 10;
  });
  return (
    <scene>
     
      <group ref={cloudref} position={[w-4*m , -1.5,0]} >
        <Cloud count={10} radius={8} />
      </group>
    
    </scene>
  );
}
