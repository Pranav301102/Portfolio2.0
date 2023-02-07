import VisibilitySensor from "react-visibility-sensor"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import "./Index.scss"

export default function Skills() {
  return (
    <div className="Skills-Container">
      <h1 className="page-title">Skills</h1>
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

function Skill(props) {
  return (
    <div className="Skill">
      <VisibilitySensor partialVisibility={'bottom'}>
        {({ isVisible }) => {
          const percentage = isVisible ? props.value : 0

          return (
            <div style={{ width: "9vw", height: "9vh" }}>
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
