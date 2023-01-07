import React from 'react'
import { useState } from 'react'
import './ContactForm.css'
import { contactFormData } from '../helper/dataControl'
import { buildForm, getFormValues } from '../helper/utility'

export default function ContactForm() {
  const [contactData, setContactData] = useState(contactFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target
    let updateObject = { ...contactData };
    let updateElement = { ...updateObject[eventName]};
    updateElement.value = eventValue;
    updateElement.touched = true;
    updateObject[eventName] = updateElement;
    setContactData(updateObject)
    console.log(updateObject);
    //TODO: set check form validity

  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log('submitting  form:', contactData);
    setIsSubmittingForm(true); 
    //TODO: handle loader
    //TODO: create a new obj and filter out data.value to send to the api
    const dataToSend = getFormValues(contactData);
    //TODO: send data to endpoint when form is submitted
    console.log(dataToSend);
    setIsSubmittingForm(false); 
  }

  return (
    <form onSubmit={submitFormHandler} className='form-container'>
      {/* loader modal when msg is being sent */}
      {/* <div className='form-loadermodal'> Sending... </div> */}
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
          return <textarea 
            key={elem.id} 
            onChange={changeHandler} 
            type={elem.config.type} 
            name={elem.config.name}
            value={elem.config.value}  
            placeholder={elem.config.placeholder}
          />
        }
      })}
      <div className='form-statusmessage'> Status message </div>
      <button disabled={false}> Send </button>
    </form>
  )
}