import React from 'react'
import './MyWork.css'
import petImg from '../../assets/petImg.jpg'
import courseImg from '../../assets/courseImg.jpg'
import caclu from '../../assets/calcu.png'
import to_do from '../../assets/To-do-img.png'
import arrowIcon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <>
    <div id='mywork' className="mywork">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="myWork-title">
                    <h1>My Latest Work</h1>
                </div>
            </div>
        </div>
       <div className="row">
            <div className="col-md-12">
                <div className="myWork-container">
                   <div className="container1">
                        <img src={courseImg} alt="" />
                        <p>Created using HTML and CSS</p>
                   </div>
                    <div className="container1">
                        <img src={petImg} alt="" />
                        <p>Created using HTML, CSS and BOOTSTRAP</p>
                    </div>
                    <div className="container1">
                        <img src={caclu} alt="" />
                        <p>Created using HTML, CSS and JAVASCRIPT</p>
                    </div>
                    <div className="container1">
                        <img src={to_do} alt="" />
                        <p>Created using HTML, CSS and JAVASCRIPT</p>
                    </div>
                </div>
               
            </div>
            
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="myWork-showMore">
                    <h4>Show more</h4>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
        </div>
       
    </div>
    </div>
    </>
  )
}

export default MyWork
