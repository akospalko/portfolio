import React from 'react'
import './Footer.css'
import '../components/Shared.css'
import Logo from '../assets/logo.svg'
import { navElements, socialLinks } from '../helper/dataControl'


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
    <div className='shared-sociallinks footer-sociallinks--added_margin'>
      { socialLinks.map(link => (
        <a 
          key={link.id}
          href={link.link}
        >  
          <img src={link.icon} alt={link.altText}/>
        </a>
      )) }
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