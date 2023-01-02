import React from 'react'

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
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="card-img-top" alt="img"/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
      </div>
      <hr/>
     </div>
     </>
  )
 
}
