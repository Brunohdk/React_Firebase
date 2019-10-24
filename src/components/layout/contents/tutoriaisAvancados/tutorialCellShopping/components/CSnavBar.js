import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function CSNavbar(){


    return(
        <div className="aroundCS">
        <div className="container CSNavBar">
        <nav className="navbar-cs">
            <div className="navbar-cs-icon">
                <Link to="/cellmarket">
                    <FontAwesomeIcon icon={faAtom} style={{color:'#ffff'}} size="2x"/>
                </Link>
            </div>
            <ul className="navbar-cs-text">
                <li >
                    <Link to="/cellmarket">Products</Link>
                </li>
            </ul>
            <div className="navbar-cs-cart">
                <Link to="/cellmarket/cart">
                    <FontAwesomeIcon icon={faShoppingCart} style={{color:'#ffff'}} />
                </Link>
            </div>
        </nav>
        </div>
        </div>
    )
}

export default CSNavbar