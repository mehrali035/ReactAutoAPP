import React from 'react'
import Web from "../src/images/f-car.png"
import {NavLink} from "react-router-dom"
import Common from './Common'


const Home = () => {
  return (
    <>

      <Common 
       name="Welcome to" 
      imgscr={Web}
      visit="/Service"
      btname="Get Started"
      
      
      />
    </>
  )
}

export default Home
