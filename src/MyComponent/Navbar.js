import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand mx-4" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">{props.Homeinfo}</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/About">{props.aboutText} </Link>
            </li>
          </ul>
          {/*<form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" id="searchTxt" type="search" placeholder="Search"
                aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>*/}
          <div className={`custom-control custom-switch text- ${props.mode === 'light'? 'black':'light'}`}>
          <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
         <label className="custom-control-label mx-4" htmlFor="customSwitch1" style={{color: props.mode === 'light'?'black':'white'}}>Enable dark mode</label>
         </div>
          {/*<div className={`form-check form-switch text- ${props.mode === 'light'? 'black':'white'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>*/}
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps={
  title: 'set title here',
  aboutText: 'set about here'
};