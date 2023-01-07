import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.svg'
import { navElements } from '../helper/dataControl'

export default function Footer() {
  const footer = 
  <div className='footer-container'>
    {/* navigation links  */}
    <ul className='footer-navlinks'> 
      { navElements.map(elem => (
        <a 
        key={elem.id}
        href={elem.anchorLink}
        > 
          <li id={elem.name}> 
            <p> {elem.name} </p> 
          </li>    
        </a>
      )) }
    </ul>
    {/* social links */}
    <div className='footer-sociallinks'>
      <a href=''>  
        <img src={Logo} alt="logo"/>
      </a>
      <a href=''>  
        <img src={Logo} alt="logo"/>
      </a>
    </div>
    {/* info */}
    <div className='footer-info'>
      {/* logo */}
      <div className='footer-logo'> 
        <img src={Logo} alt="logo"/>
      </div>
      {/* made-by */}
      <div className='footer-aboutcreator'> 
        <p> My Name, 2023 </p>
      </div>
    </div>
  </div>

  return (
    <>
      { footer }
    </>
  )
}