import React from 'react'
import './Contact.css'
import Anchor from './Anchor'
import './Shared.css'
import ContactForm from './ContactForm'

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
      {/* contact header */}
      <h1> Contact </h1>
      {/* contact short text: contact me because of this and that */}
      <p> dummy text comes here or a lorem ipsum </p>
      {/* contact form */}
      <div className='contact-content'>
      <ContactForm/>
      </div>
      {/* map/animated background */}
    </div>
  )
}