// outsource Home to its own component
import React from 'react'
import './FullContent.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Footer from '../layout/Footer'

export default function Home() {
  return (
    <> 
      <About pageLayout={'fullContentPage'}/>
      <Projects pageLayout={'fullContentPage'}/>
      <Contact pageLayout={'fullContentPage'}/>
      <Footer/>
    </>
  )
}