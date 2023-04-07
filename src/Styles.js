import { Link } from "wouter"
import "styled-components/macro"
import { a } from "@react-spring/web"
import styled from "styled-components"



const Container = styled(a.div)`
  pointer-events: none;
  position: fixed;
  top: 10%;
  left: -10%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  white-space: pre;
  margin-bottom: 3.5rem;
  font-size: 3em;
  font-weight: 500;
  letter-spacing: 0px;
`




const NavRight = styled(a.div)`
  position: absolute;
  right: 50px;
  top: 50px;
`



const Line = styled(a.div)`
  position: relative;
  width: 100%;
  will-change: transform;
  overflow: hidden;
  line-height: 1.5em;
`

const Cover = styled(a.div)`
  position: absolute;
  will-change: background, transform;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
`



const Home = styled.div`
    height: 140vh ;
    width: 100vw;
    @media only screen and  (max-width: 768px) {
      height: 120vh;
    }
    @media only screen and  (max-width: 580px) {
      height: 100vh;
    }
    @media only screen and  (max-width: 370px) {
      height: 100vh;
    }

`
export { Home,Container,  Line, Cover }
