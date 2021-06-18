import React from 'react'
import './Navbar.css'; 
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={'/'}>
                    <h1>ZUGSEIL</h1>
                </Link>
            </div>
            <div className="navbar__links">
                <Link to={'/users'}>
                    <p>users</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
