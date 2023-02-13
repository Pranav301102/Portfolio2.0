import * as THREE from 'three'
import { Suspense } from 'react'
import { useRef, useState ,useEffect} from 'react'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import { FaGithub,FaLinkedin,FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 
import "./Index.scss"



export default function Fooback() {
  const ref = useRef()
  const size = useAspect(1800, 1000)
  return (
    <mesh ref={ref} scale={[size[0]*0.17,size[1]*0.17,size[2]]} position={[-0,-47.5,9]} rotation={[0, 0, -Math.PI / 13]}>
      <planeGeometry/>  
      <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
        <VideoMaterial url="10.mp4" />
      </Suspense>
    </mesh>
  )
}
function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }
  
  function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }


 
 
  
  
  export function Footer() {
      return (
        <>
          <div className='footer'>
          <div class="main">
            <div class="col1">
              <p class="heading">Contact Me</p>
              <ul>
                <li>
                  Pranav Trivedi  
                </li>
                <li>
                <a href="https://www.linkedin.com/in/pranav-trivedi-699662233/" ><FaLinkedin/></a>
                  <a href="https://www.instagram.com/pranav_trivedi_02/" ><FaInstagram/></a>
                  <a href="https://github.com/Pranav301102" ><FaGithub/></a>
                </li>
              </ul>
            </div>
            <div class="col2">
              <p class="heading"></p>
              <ul>
                <li>
                  
                </li>
              </ul>
            </div>
            <div class="col3">
              <p class="heading">My Email</p>
              <ul>
                <li>
                  Pranavtrivedi02@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom">
            <p class="copyright">© Pranav Trivei. All rights reserved.</p>
          </div>
          </div>
        </>
      );
    }
    