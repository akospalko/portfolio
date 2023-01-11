import React from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { socialLinks } from '../helper/dataControl'
import SpaceCat from './SpaceCat'


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
      <div className='contact-header-container'> 
        <div className='contact-header-title'> 
          <h1> Contact </h1>
        </div>
          {/* contact short text */}
        <div className='contact-header-text'> 
          <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat eros vel sodales aliquam. Vestibulum id massa euismod, maximus lacus non, rhoncus mi. Phasellus consequat elementum blandit.
          </p>
        </div>
      </div>
      <div className='contact-content'>
        {/* contact form + backround */}
        <div className='contact-group_1'> 
          {/* background */}
          <div className='contact-background'>

            {/* Astrounaut bckg */}
            <div className="backg">
              <div className="planet">
                <div className="r1"></div>
                <div className="r2"></div>
                <div className="r3"></div>
                <div className="r4"></div>
                <div className="r5"></div>
                <div className="r6"></div>
                <div className="r7"></div>
                <div className="r8"></div>
                <div className="shad"></div>
              </div>
              <div className="stars">
                <div className="s1"></div>
                <div className="s2"></div>
                <div className="s3"></div>
                <div className="s4"></div>
                <div className="s5"></div>
                <div className="s6"></div>
              </div>
              <div className="an">
                <div className="tank"></div>
                <div className="astro">
                    <div className="helmet">
                      <div className="glass">
                        <div className="shine"></div>
                      </div>
                    </div>
                    <div className="dress">
                      <div className="c">
                        <div className="btn1"></div>
                        <div className="btn2"></div>
                        <div className="btn3"></div>
                        <div className="btn4"></div>
                      </div>
                    </div>
                    <div className="handl">
                      <div className="handl1">
                        <div className="glovel">
                          <div className="thumbl"></div>
                          <div className="b2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="handr">
                      <div className="handr1">
                        <div className="glover">
                          <div className="thumbr"></div>
                          <div className="b1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="legl">
                      <div className="bootl1">
                        <div className="bootl2"></div>
                      </div>
                    </div>
                    <div className="legr">
                      <div className="bootr1">
                        <div className="bootr2"></div>
                      </div>
                    </div>
                    <div className="pipe">
                      <div className="pipe2">
                        <div className="pipe3"></div>
                      </div>
                    </div>
                  </div>
              </div> 
            </div> 
            <div className='contact-additional-info'>
              <p> My Name </p>
              <p> myemail.@testmail.com </p>
              <p> Find me at: </p>
              <div className='shared-sociallinks contact-sociallinks--fullwidth'>
                { socialLinks.map(link => (
                    <a key={link.id} href={link.link}>  
                      <img src={link.icon} alt={link.altText}/>
                    </a>
                )) }
              </div>
          </div>
          </div>
          {/* contact form */}
          <div className='contact-form-container'>
            <SpaceCat/>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}