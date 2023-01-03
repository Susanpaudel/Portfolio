import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'

export const Footer = () => {
  return (
   <>
    <div className="container mb-5">
        <div className="row justify-content-center align-item-center">
            <div className="col-lg-4 my-3 text-lg-start text-center">
                <p className='mb-0'><i className="fa fa-copyright me-1"></i>copy 2021 SusanPaudel. All Rights Reserved.</p>
            </div>
            <div className="col-lg-4 text-center">
            <Link className="footer_logo" to="/portfolio"><img src={logo} alt="img"/></Link>
            </div>
            <div className="col-lg-4 my-3 text-sm-center">
            <ul className="navbar-nav">
            <li className="nav-item d-flex justify-content-center justify-content-lg-end">
            <a href='https://www.facebook.com/susan.paudel.56' target='_blank' className="nav-link ms-4 fw-bold fs-6 awe"><i className="fa-brands fa-facebook-f"></i></a>
            <a href='https://github.com/Susanpaudel' target='_blank' className="nav-link ms-4 fw-bold fs-6 awe"><i className='fab fa-github'></i></a>
            <a href='https://www.linkedin.com/in/susan-paudel-5375b422a/' target='_blank' className="nav-link ms-4 fw-bold fs-6 awe"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
            </li>
            </ul>
            </div>
        </div>
    </div>
   </>
  )
}
