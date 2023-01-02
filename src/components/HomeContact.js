import React from 'react'
import {Link} from 'react-router-dom'

export const HomeContact = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-0"></div>
            <div className="col-lg-4 col-12">
                <div className="big_circle ">
                    <p className='text-uppercase fw-bold text-secondary'>Contact Me</p>
                    <Link to='/contact' className='text-decoration-none call'><h1 className='mb-0 pb-0'>Call<br/>Susan</h1>
                    <span className='arrow'>&#8599;</span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-0"></div>
        </div>
        <hr/>
    </div>
    </>
  )
}
