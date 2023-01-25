import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Footer from "./Footer"
import ErrorPage from "./ErrorPage"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App

