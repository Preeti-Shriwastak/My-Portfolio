import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
   
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a0ff925e-41c5-49ed-b86b-1db39d5e9528");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Email send Successfully", res);
        }
      };
  return (
    <>
    <div id="contact">
    <div className="container contact">
        <div className="row">
            <div className="col-md-12">
               <div className="contact-title">
                    <h1>Get in touch</h1>
               </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="contact-details">
                <div className="contact-section">
                    <h1>Let's talk</h1>
                    <p>Thank you for visiting my portfolio. I’m always open to new projects, collaborations, or even just a chat about web development and design. Whether you have a specific project in mind or would like to discuss potential opportunities, I’d love to hear from you!</p>
               </div>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p> preeti123@gmailcom</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p> +91 81235 23098</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p> Bangalore</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-6">
                <form onSubmit={onSubmit}>
                    <div className="contact-detail-right">
                        <div className="form-group contact-form">
                            <label htmlFor="">Your Name</label>
                            <input type="text" name="name" className='form-control' placeholder='Enter your name' />
                        </div>
                        <div className="form-group contact-form">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" className='form-control' placeholder='Enter your email' />
                        </div>
                        <div className="form-group contact-form">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" className='form-control' placeholder='Enter your message'></textarea>
                        </div>
                        <div className="submit-btn">
                            <button type='submit' className='contact-btn'>Submit</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    </div>
    </div>   
    
      
    </>
  )
}

export default Contact
