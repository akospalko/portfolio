import React from 'react'
import './Footer.css'
import Logo from '../assets/logo-test.svg'
import { navElements } from '../helper/dataControl'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-group1'> 
        {/* navigation links */}
        <ul className='footer-navlinks'> 
          <li> <b> Navigation </b> </li>
          { navElements.map(elem => (
            <a 
              key={elem.id}
              href={elem.anchorLink}
            > 
              <li id={elem.name}> {elem.name} </li>    
            </a>
          )) }
        </ul>
        {/* social links */}
        <div className='footer-sociallinks'>
          <a href=''> 
            <img src={Logo} alt="logo"/>
          </a>
          <a href=''>  
            < img src={Logo} alt="logo"/>
          </a>
        </div>
      </div>
      {/* logo */}
      <div className='footer-logo'> 
        <img src={Logo} alt="logo"/>
      </div>
      {/* made-by */}
      <div className='footer-aboutcreator'> 
        <p> My Name, 2023 </p>
      </div>
    </div>
  )
}
