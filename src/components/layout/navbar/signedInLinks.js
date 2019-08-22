import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../../store/actions/authActions'
import './Nav.css'
import styled from 'styled-components'


const SignedInLinks = (props) => {

    return(
        <ul className="header-nav-links">
            <a href="/#" onClick={props.signOut} className="nav-link"><li><span className="header-nav-icon"><i className="fa fa-sign-out"></i></span> <span className="header-nav-text"> Log Out</span></li></a> 
            <li><NavLink to='/'><Button className="btn-floating btn-sm btn-default">{props.profile.initials}</Button></NavLink></li>
        </ul>
    )
}

const Button = styled.button`
    position:relative;
    top: 4px;
    list-style:none;
    color:black;
    font-size:1px;
`;

const mapDispatchToProps = dispatch => {
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks)