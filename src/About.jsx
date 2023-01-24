import React from 'react'
import Web from "../src/images/f-car.png"
import {NavLink} from "react-router-dom"
import Common from './Common'

const About = () => {
  return (
    <>
    <Common  
     name="We are deals in New and Used cars" 
     imgscr={Web}
     visit="/Service"
     btname="Get Started"
    /> 
    </>
  )
}

export default About
