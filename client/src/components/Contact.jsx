//outsource contact form to a sep file

import React from 'react'
import './Contact.css'
import Anchor from './Anchor'
import './Shared.css'
import ContactForm from './ContactForm'


export default function Contact({ calcHeight }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'contact-container';
  calcHeight === 'fullContent' ?  
  componentContainer = ['contact-container', 'contact-container--minheight'].join(' ')
  : null;  

  return (
    <div className={ componentContainer }>
      {/* anchor tag for : !!!!full page only */}
      <Anchor componentName='contact' />
      {/* contact header */}
      <h1> Contact </h1>
      {/* contact short text: contact me because of this and that */}
      <p> looking for job offers in this and that field </p>
      {/* contact form */}
      <ContactForm/>
      {/* map/animated background */}
    </div>
  )
}