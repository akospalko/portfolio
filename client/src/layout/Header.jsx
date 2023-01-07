// Header for all layouts
import React from 'react';
import './Header.css';
import MenuOpen from '../assets/menu-bar.svg';
import MenuClose from '../assets/close.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';
import Logo from '../assets/logo.svg';

export default function Header() {
  const [toggled, setToggled] = useState(false); // menu bar toggle for responsive view

  //toggle menu bar handler for responsive view
  const toggleHandler = () => {
    setToggled(prev => !prev);
  }

  //Conditional rendering header
  //responsive view
  const headerResponsive = 
    <div className={'layout-header-responsive'}>
      <div 
        className='header_responsive-menubar'
        onClick={toggleHandler}
      > 
        {toggled ? 
          <img src={MenuClose} alt='menu bar close'/>
          :
          <img src={MenuOpen} alt='menu bar open'/>
        }
      </div>
      <div 
        className='header_responsive-logo'
        onClick={ () => setToggled(false) }
      >  
        <Link to={'/'}> 
          <img src={Logo} alt='logo'/>
        </Link>
      </div>
      <div className='header'> </div>
      {/* menu bar */}
      {toggled ? 
        (<div className={'header_responsive-navmenu'}>
          <Navigation toggleHandler={toggleHandler} />
        </div>) : null
      }
    </div>

  //pc view
  const header =     
    <div className={'layout-header-pc'}>
      <div className='header-logo'>  
        <Link to={'/'}> 
          <img src={Logo} alt='logo'/>
        </Link>
      </div>
      <Navigation />     
      <div className={ ['header', 'dummy'].join(' ') }> </div>
    </div>

  return (
    <>
      { headerResponsive }
      { header }
    </>
  )
}