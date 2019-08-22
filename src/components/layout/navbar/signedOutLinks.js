import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'


const SignedOutLinks = () => {
    return(
        <ul className="header-nav-links">
               <NavLink to="/signin" className="nav-link"><li><span className="header-nav-icon"><i className="fa fa-sign-in"></i></span> <span className="header-nav-text"> Log in</span></li></NavLink> 
                <NavLink to="/signup" className="nav-link"><li><span className="header-nav-icon"><i className="fa fa-user"></i></span> <span className="header-nav-text"> Sign up</span></li></NavLink> 
            </ul>
    )
}

export default SignedOutLinks