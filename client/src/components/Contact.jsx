import React from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { socialLinks } from '../helper/dataControl'
import SpaceCat from './SpaceCat'
import Astronaut from './Astronaut'


export default function Contact({ pageLayout }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'contact-container';
  pageLayout === 'fullContentPage' ?  
  componentContainer = ['contact-container', 'contact-container--minheight'].join(' ')
  : null;  

  return (
  <div className={ componentContainer }>
    {/* anchor tag for full content page */}
    { pageLayout === 'fullContentPage' ? <Anchor componentName='contact' /> : null }
    <div className='contact-content'>
      <div className='contact-group-1'>
        {/* contact header */}
        <div className='contact-header-container'> 
          <div className='contact-header-title'> 
            <h1> Contact </h1>
          </div>
          {/* contact short text */}
          <div className='contact-header-text'> 
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat eros vel sodales aliquam. Vestibulum id massa euismod, maximus lacus non, rhoncus mi. Phasellus consequat elementum blandit. </p>
          </div>
        </div>
        {/* backround */}
        <div className='contact-background'>
          {/* Astrounaut bckg */}
          <Astronaut/>
          {/* additional information */}
          <div className='contact-additional-info'>
            <p> My Name </p>
            <p> myemail.@testmail.com </p>
            <div className='shared-sociallinks contact-sociallinks--fullwidth'>
              { socialLinks.map(link => (
                  <a key={link.id} href={link.link}>  
                    <img src={link.icon} alt={link.altText}/>
                  </a>
              )) }
            </div>
          </div>
        </div>
      </div>
      <div className='contact-group-2'>
          {/* <div className=''> text bubble </div>
          <div className=''> cat </div>
          <div className=''> form </div>  */}
        <SpaceCat/>
        <ContactForm/>
      </div>
    </div>
  </div>
)}

