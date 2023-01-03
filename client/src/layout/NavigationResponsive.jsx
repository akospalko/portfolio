//responsive navbar: full screen
import React from 'react'
import { navElements } from '../helper/dataControl'
import './NavigationResponsive.css'
import { Link } from "react-router-dom";

export default function NavigationResponsive() {
  return (
    <div className='navigation-container'>
        <ul> 
          {
            navElements.map((elem) => (
              <li 
                className='navigation-item'
                key={elem.id}  
              >
                <Link to={elem.path}> <p> {elem.name}  </p> </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}