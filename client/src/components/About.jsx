import React from 'react'
import './About.css'
import { navElements } from '../helper/dataControl'
import { findAnchorLink } from '../helper/utility'

export default function About({ calcHeight }) {
    const componentName = 'about'
    //conditional render height of the page based on if it is displayed as a single component vs together with other components
    let componentContainer = 'about-container';
    calcHeight === 'fullContent' ?  
    componentContainer = ['about-container', 'about-container--minheight'].join(' ')
    : null;  
  
 
  return (
    <article className={ componentContainer }>

      <div className='about-anchor'> 
        <a href={findAnchorLink(navElements, componentName).anchorLink}> 
          <h1 id={findAnchorLink(navElements, componentName).name}> About </h1>
        </a>
      </div>
      <p> The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </article>
  )
}