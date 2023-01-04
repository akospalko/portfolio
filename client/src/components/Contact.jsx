import React from 'react'
import './Contact.css'

export default function Contact({ calcHeight }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'contact-container';
  calcHeight === 'fullContent' ?  
  componentContainer = ['contact-container', 'contact-container--minheight'].join(' ')
  : null;  
  
  return (
    <div className={ componentContainer }>
      <p> Contact </p>
      <h2> WWF History</h2>
      <p> The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </div>
  )
}