import React from 'react'
import './Contact.css'
import { findAnchorLink } from '../helper/utility'
import { navElements } from '../helper/dataControl'

export default function Contact({ calcHeight }) {
  const componentName = 'contact';
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'contact-container';
  calcHeight === 'fullContent' ?  
  componentContainer = ['contact-container', 'contact-container--minheight'].join(' ')
  : null;  
  
  return (
    <div className={ componentContainer }>
      <div className='contact-anchor'>
        <a href={findAnchorLink(navElements, componentName).anchorLink}> 
          <h1 id={findAnchorLink(navElements, componentName).name}> Contact </h1>
        </a>
      </div>
      <p> The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </div>
  )
}