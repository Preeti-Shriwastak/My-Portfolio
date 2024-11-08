import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.JPG' 

const About = () => {
  return (
    <>
    <div id="about">
      <div className='about'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-title">
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 img">
                <img src={profile_img} alt="" />
              </div>
              <div className="col-md-8">
                <div className="about-para">
                  <p>I am a recent graduate, having completed my Master’s in Computer Applications in 2024 from Parul University </p>
                  <p>Eager to apply my skills in designing and developing responsive, visually appealing applications using creative solutions. As a fresher, I am excited to bring fresh ideas, a willingness to learn, and a strong foundation in front-end technologies to contribute to innovative projects.</p>
                </div>
                <div className="about-skills">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT JS</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
      </div>
    </>
  )
}

export default About
