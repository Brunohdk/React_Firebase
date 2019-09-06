import React from 'react';
import Capa from './Debaixo';
import Capa2 from './Debaixo2';
import Dash from '../pagination/dashboard'
import Iniciantes from './Iniciantes';
import NavBar from './Navbar'

 const Site = () => {
    return(
        <div>
            <NavBar/>
            <Capa/>
            <Capa2/>
            <Dash/>
            <Iniciantes/>
        </div>
    )
}

export default Site