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

const Box = styled(a.div)`
  position: absolute;
  transform: translate3d(-50%, -42%, 0);
  will-change: opacity;
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

function Nav(props) {
  return (
    <>
      <NavRight {...props}>
        <Link to="/">Torus</Link>
        <Link to="/knot">Knot</Link>
        <Link to="/bomb">Bomb</Link>
      </NavRight>
    </>
  )
}

const Home = styled.div`
    height: 140vh ;
    width: 100vw;

`
export { Home,Container, Nav, Box, Line, Cover }
