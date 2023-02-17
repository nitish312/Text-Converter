import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">{props.services}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">{props.contact}</Link>
                </li>
                
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}

            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    services : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired, 
    contact : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "title likhle bhai",
  services : "services bhi likh",
  about : "about us bhi reh gaya", 
  contact : "bhai kya kar raha hai tu",
}