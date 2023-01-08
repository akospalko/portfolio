/*
TODO: button styling + disable 
*/

import React from 'react'
import { useState, useEffect } from 'react'
import './ContactForm.css'
import { contactFormData } from '../helper/dataControl'
import { buildForm, getFormValues, calcRemainingCharacters } from '../helper/utility'
import Loader from '../assets/loader.svg'

export default function ContactForm() {
  const [contactData, setContactData] = useState(contactFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  useEffect(( )=> {
    console.log('form is submitting.', isSubmittingForm)
  }, [isSubmittingForm])

  const changeHandler = (e) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target
    let updateObject = { ...contactData };
    let updateElement = { ...updateObject[eventName]};
    updateElement.touched = true;
    updateElement.value = eventValue;
    //check and set word count
    updateElement.wordCount = updateElement.value.length
    updateObject[eventName] = updateElement;
    setContactData(updateObject)
    //TODO: set check form validity
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    
    console.log(isSubmittingForm)
    // filter out form data's name and value to send to the api
    const dataToSend = getFormValues(contactData);
    //TODO: handle loader
    //TODO: send data to endpoint when form is submitted
    console.log(isSubmittingForm);
    setIsSubmittingForm(true); 
    setTimeout(() => {
      console.log(isSubmittingForm)
      console.log('simulate side effect...')
      setIsSubmittingForm(false); 
    }, [2000] )
  }

  return (
    <form onSubmit={submitFormHandler} className='form-container'>
      {/* TODO: enable loader modal when msg is being sent */}
      {isSubmittingForm ? <div className='form-loadermodal'> 
        <div className='form-loader'> 
          <img src={Loader} />
          {/* success icon */}
          {/* failure icon */}
        </div> 
        <div className='form-statusmessage'> Status Mesage </div>
      </div> : null }
      <h2> Send a Message </h2>
      {buildForm(contactData).map((elem) => {
        if(elem.config.fieldType === 'input') {
          return <input 
            key={elem.id} 
            onChange={changeHandler} 
            type={elem.config.type} 
            name={elem.config.name}
            value={elem.config.value} 
            placeholder={elem.config.placeholder}
          />
        } else if (elem.config.fieldType === 'textarea') {
          return <div 
          className='form-message'
          key={elem.id} >
            <textarea 
              onChange={changeHandler} 
              type={elem.config.type} 
              name={elem.config.name}
              value={elem.config.value}  
              maxLength={elem.config.maxLength}
              placeholder={elem.config.placeholder}
            />
            <div className='form-charactercount'> 
              { calcRemainingCharacters(elem.config.wordCount, elem.config.maxLength) } 
            </div>
          </div>
        }
      })}
      <button disabled={false}> Send </button>
    </form>
  )
}