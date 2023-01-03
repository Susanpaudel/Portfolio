import React from 'react'
import img1 from '../image/work1.png'
import img2 from '../image/work2.png'

export const Work = () => {
  return (
     <>
     <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1>Work</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-3 my-3">
        <div className="card work">
          <img src={img1} className="card-img-top" alt="img"/>
          <div className="card-body text-center">
            <h5 className="card-title">Learning Management System</h5>
            <p className="card-text">This project show the video recording of related subjects that need to be paid to access the video.</p>
          </div>
        </div>
        </div>
        <div className="col-lg-3 my-3">
        <div className="card work">
          <img src={img2} className="card-img-top" alt="img"/>
          <div className="card-body text-center">
            <h5 className="card-title">Online Ticket Booking System</h5>
            <p className="card-text">This project ia about booking ticket from one city to another city at cheap price.</p>
          </div>
        </div>
        </div>
      </div>
      <hr/>
     </div>
     </>
  )
 
}
