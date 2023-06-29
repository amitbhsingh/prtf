// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Contact
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v52e6ir', 'template_6ed65ge', form.current, 'vqU9qte9ezY0Q2dj5')
      .then((result) => {
          console.log(result.success);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form-box'>
    <form ref={form} onSubmit={sendEmail}>
      <label id='name'>Name</label>
      <input placeholder='Name Please' className='userName' type="text" name="user_name" required/>
      <label>Email</label>
      <input placeholder='Your Email' type="email" name="user_email" required/>
      <label>Message</label>
      <textarea placeholder='Leave a message' name="message" required/>
      <input className='sndBtn' type="submit" value="To send a message press anywhere on the black bar"/>
    </form>
    </div> 
  );
};
export default Contact;

