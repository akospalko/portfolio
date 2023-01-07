//outsource contact form to a sep file

import React from 'react'
import './Contact.css'
import Anchor from './Anchor'

import './Shared.css'
import { findAnchorLink } from '../helper/utility'
import { navElements } from '../helper/dataControl'
import AnchorIcon from '../assets/anchor.svg'


export default function Contact({ calcHeight }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = 'contact-container';
  calcHeight === 'fullContent' ?  
  componentContainer = ['contact-container', 'contact-container--minheight'].join(' ')
  : null;  
  
  const changeHandler = ( ) => {

  }
  const submitFormHandler = ( ) => {

  }

  return (
    <div className={ componentContainer }>
      {/* anchor tag for : !!!!full page only */}
      <Anchor componentName='contact' />
      {/* contact header */}
      <h1> Contact </h1>
      {/* contact short text: contact me because of this and that */}
      <p> looking for job offers in this and that field </p>
      {/* contact form */}
      <form className='form-container'>
        {/* loader modal when msg is being sent */}
        <div className='form-loadermodal'> Sending... </div>
        <h2> Send a Message </h2>
        <input onChange={changeHandler} type='text' name='name' value='' placeholder='your name'/>
        <input onChange={changeHandler} type='email' name='email' value='' placeholder='your name'/>
        <textarea onChange={changeHandler} type='text' name='message' value='' placeholder='your name'/>
        <div className='form-statusmessage'> Status message </div>
        <button> Send </button>
      </form>
      {/* map/animated background */}
    </div>
  )
}