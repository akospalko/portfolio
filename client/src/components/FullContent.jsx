// outsource Home to its own component
import React from 'react'
import './FullContent.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function Home() {
  return (
    <> 
      <About calcHeight={'fullContent'}/>
      <Projects calcHeight={'fullContent'}/>
      <Contact calcHeight={'fullContent'}/>
    </>
  )
}