import '../css/contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../Component/Loader.js';

const Contact=()=>{
const [isLoading, setIsLoading] = useState(false);

const Load=(value)=>
{setIsLoading(value);}



    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm('service_vmxg8ul', 'template_fsma85v', form.current, 'fOlbcRD2aCS0JjSkC')
      .then((result) => {
      
          alert(result.text);
          setIsLoading(false);
          form.current.reset();
        },
        
        (error) => {
         alert(error.text);
      });
  };
    return(
      <>
          <div className="container">
              <h1>Contact Me</h1>
              <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="your_name"  required/>

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="your_email" required/>

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                  {
                           isLoading?
                        <Loader />
                          :
                  <button type="submit"  value='send' onSubmit={()=>Load(false)}>Send Message</button>
                }
              </form>
          </div>
      </>

    );

}
export default Contact;