import React from 'react'
// import Web from "../src/images/f-car.png"
// import { NavLink } from "react-router-dom"
import Web from "../src/images/g-.png"
import Common from './Common'

const About = () => {
  return (
    <>
      <Common
        name="We are deals in new and used cars"
        imgscr={Web}
        visit="/Service"
        btname="Services"
      />
    </>
  )
}

export default About
