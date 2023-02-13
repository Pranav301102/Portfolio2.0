import VisibilitySensor from "react-visibility-sensor"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import { Line,meshBounds } from "@react-three/drei"
import "react-circular-progressbar/dist/styles.css"
import "./Index.scss"
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Skills() {
  return (
    <div className="Skills-Container">
      <div id="upper-line-skill"></div>
      <h1 className="page-title-skill">Skills</h1>
      <div id="buttom-line-skill"></div>
      <div className="Skills">
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
        <Skill value={88} src={'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg'} />
      </div>
    </div>
  )
}

function BlackRect({ position, scale,innerRef, ...props }) {
  return (
    <group position={position} scale={scale} ref={innerRef}>
      <Line
        points={[
          -0.5,
          0.5,
          0,
          0.5,
          0.5,
          0,
          0.5,
          -0.5,
          0,
          -0.5,
          -0.5,
          0,
          -0.5,
          0.5,
          0
        ]}
        color="grey"
        linewidth={2}
        transparent
        opacity={0.5}
      />
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export function Rects ({ position, scale, ...props }) {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  useFrame(()=>{
    ref1.current.rotation.z = ref1.current.rotation.z + 0.001
    ref2.current.rotation.z = ref2.current.rotation.z + 0.003
    ref3.current.rotation.z = ref3.current.rotation.z + 0.007
  })
  console.log(ref1)
  return (
    <group scale={scale}>
        <BlackRect innerRef={ref1} position={[13,-20,0]} scale={8}/>
        <BlackRect innerRef={ref2}position={[-11,-22,0]} scale={5}/>
        v<BlackRect innerRef={ref3}position={[-2,-27,0]} scale={2}/>
    </group>
  );
}


function Skill(props) {
  return (
    <div className="Skill">
      <VisibilitySensor partialVisibility={'bottom'}>
        {({ isVisible }) => {
          const percentage = isVisible ? props.value : 0

          return (
            <div className="skill-bar">
              <CircularProgressbarWithChildren
                value={percentage}
        
                styles={buildStyles({

                  pathTransitionDuration: 1,

                  pathColor: `rgba(62, 152, 199, 1)`,
                  textColor: "#f88",
                  trailColor: "none",
                  backgroundColor: "#3e98c7",
                })}
              >
                <img src={props.src} className="img" ></img>
              </CircularProgressbarWithChildren>
            </div>
          )
        }}
      </VisibilitySensor>
    </div>
  )
}



