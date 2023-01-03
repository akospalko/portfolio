// Header for all layouts
import React from 'react';
import './HeaderResponsive.css';
import MenuOpen from '../assets/menu-bar.svg';
import MenuClose from '../assets/close.svg';
import Logo from '../components/Logo';
import { Link } from "react-router-dom";

export default function HeaderResponsive() {
  return (
    <>
      <div className='header_responsive-menubar'>
        <img src={MenuOpen} alt='menu bar open'/>
        {/* <img src={MenuClose} alt='menu bar close'/> */}
      </div>
      <div className='header_responsive-logo'>  
        <Link to={'/'}> 
          <Logo/>
        </Link>
      </div>
      <div className='header_responsive-dummy'> </div>
    </>
  )
}