import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark  sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={Logo} className='img-fluid w-25'/></a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className='text-white '/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 align-items-center">
                        <li className="nav-item  ">
                            <a className="nav-link px-sm-4 py-2 " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 py-2" href="#AboutMe">About Me</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 py-2" href="#Services">Services</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 py-2" href="#Portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 py-2" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
