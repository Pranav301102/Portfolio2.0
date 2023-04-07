//create a react component
import React from "react"
import "./index.scss"
import { useEffect } from "react"
import { AiOutlineHome, AiOutlineUser,AiOutlineProject } from "react-icons/ai"
import { BiBook} from "react-icons/bi"
import { BiMessageSquareDetail } from "react-icons/bi"



export default function Navbar() {
  useEffect(() => {
    const nav = document.querySelector(".nav")
    const navItems = document.querySelectorAll(".nav__item")
    const navSlider = document.querySelector(".nav__slider")

    const sizeMap = new Map()

    let isSliderShown = false

    navItems.forEach((navItem) => {
      navItem.addEventListener("pointerenter", () => {
        const navRect = sizeMap.get(nav) || nav.getBoundingClientRect()
        const itemRect = sizeMap.get(navItem) || navItem.getBoundingClientRect()

        const transitionDuration = isSliderShown ? 300 : 0

        const sliderWidth = navItem.clientWidth
        const sliderHeight = navItem.clientHeight
        const sliderLeft = itemRect.left - navRect.left

        navSlider.animate(
          [
            {
              width: `${sliderWidth}px`,
              height: `${sliderHeight}px`,
              transform: `translate(${sliderLeft}px, 0px)`,
			  marginTop: "10px",
              borderRadius: "80px",
            },
          ],
          {
            duration: transitionDuration,
            fill: "forwards",
            easing: "cubic-bezier(0.03, 1, 0.08, 1)",
          },
        )

        isSliderShown = true
        sizeMap.set(navItem, itemRect)
        sizeMap.set(nav, navRect)
      })
    })

    nav.addEventListener("pointerleave", () => {
      isSliderShown = false
    })

    window.addEventListener("resize", () => sizeMap.clear())
  }, [])

  return (
    <div class="navcontainer">
      <nav class="nav">
        <div class="nav__slider"></div>

        <div class="nav__item"><AiOutlineHome /></div>
        <div class="nav__item"><AiOutlineUser /></div>
        <div class="nav__item"> <BiBook /></div>
        <div class="nav__item"><AiOutlineProject/></div>
		<div class="nav__item"><BiMessageSquareDetail /></div>
      </nav>
    </div>
  )
}
