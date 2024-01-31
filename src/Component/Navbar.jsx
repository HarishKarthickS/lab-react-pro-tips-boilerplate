import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar =()=>{
    return (
        <>
            <div id="Navbar">
                <Link to="/"><img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" /></Link>
                <div id="Navbar-1">
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/registration">Registration</Link>
                </div>
            </div>
        
        </>
    )
}

export default Navbar;