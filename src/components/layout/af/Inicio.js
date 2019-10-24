import React from 'react';
import Capa from './Debaixo';
import Capa2 from './Debaixo2';
import Dash from '../pagination/dashboard'
import Iniciantes from './Iniciantes';
import Medianos from './Mediano';
import Avancados from './Avancados'
import NavBar from './Navbar'
import About from './About';
import Contact from './Contact'

 const Site = () => {
    return(
        <div>
            <NavBar />
            <Capa />
            <Capa2 />
            <Dash />
            <Iniciantes />
            <Medianos />
            <Avancados />
            <About />
            <Contact />
        </div>
    )
}

export default Site