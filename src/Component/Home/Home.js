import React from 'react'
import './Home.css'
import profile from '../../assets/profile.JPG'

const Home = () => {
  return (
    <div id="home">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className='home'>
          <img src={profile} alt="" className='img-thumbnail' />
          <h1><span>I'm Preeti Shriwastak,</span> interested in frontend developer</h1>
          <p>Skilled with HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT JS</p>
          <div className="home-action">
              <div className="home-connect"><a href="#contact">Connect with me</a></div>
              <div className="home-resume">My Resume</div>
          </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
