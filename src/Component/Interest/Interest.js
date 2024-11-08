import React from 'react'
import './Interest.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Interest = () => {
  return (
    <>
    <div id='interest' className="interest">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                   <div className="interest-title">
                        <h1>My Interest</h1>
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="interest-container">
                        {Services_Data.map((service, index) => {
                            return <div key={index} className="service-formate">
                                <h3>{service.s_no}</h3>
                                <h2>{service.s_name}</h2>
                                <p>{service.s_desc}</p>
                                <div className="interest-readmore">
                                    <p>Read More</p>
                                    <img src={arrow_icon} alt="" />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Interest
