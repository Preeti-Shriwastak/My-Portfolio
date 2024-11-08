import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <>
    <div className="footer-section">
        <div className="container">
            <div className="row footer-top">
                <div className="col-md-6">
                    <div className="footer-top-left">
                        <h1 className='logo-title'>Pre<span className='logo-sub-title'>ETi</span></h1>
                        <p>Seeking for a job in FRONTEND DEVELOPER as a fresher.  </p>
                    </div>
                </div>
                <div className="col-md-6 footer-content">
                    <div className="footer-top-right">
                        <img src={user_icon} alt="" />
                        <input type="email" name="" id="" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe</h3>
                    </div>
                </div>
            </div>
            <hr />
            
        </div>
    </div>
    <div className="container">
        <div className="row footer-bottom">
                <div className="col-md-6">
                    <div className="footer-left-bottom">
                        <p>&copy; 2024 Preeti Shriwastak. All rights</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-right-bottom">
                        <p>Terms of services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Footer
