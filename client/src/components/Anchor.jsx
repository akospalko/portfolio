//reusable anchor link to align scroll to the top of the linked article/page
import React from 'react'
import './Shared.css'
import { findAnchorLink } from '../helper/utility'
import { navElements } from '../helper/dataControl'
import AnchorIcon from '../assets/anchor.svg'

export default function Anchor({ componentName }) {
  return (
    <div className='shared-anchor'>
      <a href={findAnchorLink(navElements, componentName).anchorLink}>
        <img id={findAnchorLink(navElements, componentName).name} src={AnchorIcon} alt="anchor"/>
      </a>
    </div>
  )
}