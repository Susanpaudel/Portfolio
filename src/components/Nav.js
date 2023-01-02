import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'

export const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand py-1" to="/"><img src={logo} alt="img"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fw-bold" to="/work">Work</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fw-bold" to="/photo">Portfolio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">Contact</Link>
                </li>
            </ul>
            
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item d-flex">
            <Link to='' className="nav-link me-2 awe fw-bold"><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to='' className="nav-link me-2 awe fw-bold"><i className='fab fa-viber'></i></Link>
            <Link to='' className="nav-link me-2 awe fw-bold"><i className="fab fa-linkedin" aria-hidden="true"></i></Link>
            </li>
            </ul>
            </div>
          
        </div>
        
    </nav>
    </>
  )
}
