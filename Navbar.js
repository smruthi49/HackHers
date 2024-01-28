import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate(); // Declare navigate variable here

    const translateContent = async () => {
        try {
            const response = await axios.get('http://localhost:3001/translate', {
                params: {
                    q: 'Hello',
                    langpair: 'en|ta',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Translation error:', error);
        }
    };
    
    return (
        <nav className="navbar sticky-top navbar-expand-lg  bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid navtop">
                <a className="navbar-brand" href="#">Vote Chain<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
                </svg></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="mainnav collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#" onClick={() => {
                            navigate('/admin');
                        }}>Admin login</a>
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#aboutUs">About EV</a>
                        <a className="nav-link" href="#">Help</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Language Translate
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* Add other Indian languages as needed */}
                                <li>
                                    <a className="dropdown-item" href="#" >
                                        Hindi
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" >
                                        Tamil
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
