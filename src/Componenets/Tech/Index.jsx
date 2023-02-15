 import React from "react";
 import styled from "styled-components";
 import "./Index.scss";
 
 export default function Tech() {
    return (
        <div className="Technologies">
            <h1 className="Technologies__title">Technologies I use</h1> 
      <Slider>
        <SlideTrack>
          <Slide>
            <img
              src="https://cdn.cdnlogo.com/logos/n/79/node-js.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://cdn.cdnlogo.com/logos/t/22/tensorflow.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://cdn.cdnlogo.com/logos/o/96/opencv.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/320px-Pandas_logo.svg.png"
              height="175"
              width="290"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png"
              height="175"
              width="195"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png"
              height="175"
              width="175"
              alt=""
            />
          </Slide>
        </SlideTrack>
      </Slider>
      </div>
    );
  }
  
  const Slider = styled.div`
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  height: 200px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;
  background-color: rgba(150, 150, 150, 0.123);

  &::before,
  &::after {
    /* background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); */
    content: "";
    height: 150px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;
const SlideTrack = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 5));
    }
  }
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`;
const Slide = styled.div`
  height: 200px;
  width: 250px;
  display:flex ;
    justify-content: center;
    flex-direction:column ;
    align-items:center ;
`;

