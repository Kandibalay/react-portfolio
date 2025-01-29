import React from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './layouts/Footer'

function App() {
  return (
    <div className='font-roboto'>
      <Navbar/>
      <div id='home'><Hero/></div>
      <div id='skills'><Skills/></div>
      <div id='about'><About/></div>
      <div id='portfolio'><Portfolio/></div>
      <div id='testimonial'><Testimonials/></div>
      <div id='contact'><Contact/></div>
      
      
     
      
      
      
      <Footer/>
    </div>
  )
}

export default App
