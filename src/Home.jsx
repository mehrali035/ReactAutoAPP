import React from 'react'
import Web from "../src/images/f-car.png"
import Common from './Common'


const Home = () => {
  return (
    <>

      <Common
        name="Welcome to"
        imgscr={Web}
        visit="/about"
        btname="Get Started"


      />
    </>
  )
}

export default Home
