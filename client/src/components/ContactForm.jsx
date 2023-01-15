/*
TODO: button styling + disable
TODO: if server is not running we get -> undefined(500) as status message, fix status message  
*/

import React from 'react'
import { useState } from 'react'
import './ContactForm.css'
import { contactFormData, SENDING_EMAIL } from '../helper/dataControl'
import { buildForm, getFormValues, calcRemainingCharacters } from '../helper/utility'
import Loader from '../assets/loader.svg'
import axios from 'axios'

export default function ContactForm() {
  const [contactData, setContactData] = useState(contactFormData);
  //const [isFormValid, setIsFormValid] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target;
    let updateObject = { ...contactData };
    let updateElement = { ...updateObject[eventName]};
    updateElement.touched = true;
    updateElement.value = eventValue;
    updateElement.wordCount = updateElement.value.length; // update word count
    updateObject[eventName] = updateElement;
    setContactData(updateObject);
    //TODO: set check form validity
  }

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const mailData = getFormValues(contactData); // prepare data to send -> filter out field name/value
    if(!mailData) return;
    setIsSubmittingForm(true); 
    setStatusMessage(SENDING_EMAIL);
    try {
      const sendMailResponse = await axios.post(`/sendmail`, mailData);
        setStatusMessage(`${sendMailResponse.data.statusMessage}`);
        setContactData(contactFormData) // reset form to its initial state  
    } catch (error) {
        setStatusMessage(`${error.response.data.statusMessage} (${error.response.status})`);
    }
    //allow user to see loader and status message if request happens too quickly 
    setTimeout(() => {
      setIsSubmittingForm(false); 
    }, [1000])
  }

  return (
    <form onSubmit={submitFormHandler} className='form'>
      {/* enable loader modal when msg is being sent */}
      {isSubmittingForm ? <div className='form-loadermodal'> 
        <div className='form-loader'> 
          <img src={Loader} />
          {/* success icon */}
          {/* failure icon */}
        </div> 
        <div className='form-statusmessage'> {statusMessage} </div>
      </div> : null }
      {/* <h2> Send a Message </h2> */}
      { buildForm(contactData).map((elem) => {
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
          key={elem.id}>
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
      }) }
      <button disabled={false}> Send </button>
    </form>
  )
}