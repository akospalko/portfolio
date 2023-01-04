import React from 'react'
import './Projects.css' 

export default function Projects({ calcHeight }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'projects-container';
  calcHeight === 'fullContent' ?  
  componentContainer = ['projects-container', 'projects-container--minheight'].join(' ')
  : null;  

  return (
    <article className={ componentContainer }>
      <div> Projects </div>
      <h2>WWF History</h2>
      <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </article>
  )
}
