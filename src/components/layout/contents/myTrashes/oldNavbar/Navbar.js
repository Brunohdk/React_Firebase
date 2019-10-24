import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../assets/logo4.png'

const Navbar = (props) => {
    const {authIsEmpty, profile} = props
    const links = authIsEmpty ? <SignedOutLinks/> : <SignedInLinks profile={profile}/>
    return(
    <div>
        <header className="header-nav">
            <div className="logo">
            <Link to ='/'><img src={Logo} alt="logo"/></Link>
            </div>
            <div className="form-group left-inner-addon">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" placeholder="Qual a sua dúvida?..."/>
            </div>  
            {links}
        </header>
        
        <nav className="nav">
            <ul className="nav-links">
            <Link to='/todos' className="nav-link"><li>TO DO'S</li></Link> 
            <Link to='/acctracker' className="nav-link"><li>ACCOUNT TRACKER</li></Link> 
            </ul>
        </nav>    
    </div>
    )
}

const MapStateToProps = state => {
    return{
        authIsEmpty: state.firebase.auth.isEmpty,
        profile: state.firebase.profile
    }
}

export default connect(MapStateToProps)(Navbar)