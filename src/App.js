import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Todos from './components/layout/contents/toDos'
import Contas from './components/layout/contents/contas'
import Dashboard from './components/layout/pagination/dashboard'
import ProjectDetails from './components/layout/pagination/projectDetails'
import NewTeste from './components/layout/NewTest'
import Navbarr from './components/layout/af/Navbar'
import DeBaixo from './components/layout/af/Debaixo'
import DeBaixo2 from './components/layout/af/Debaixo2'
import './index.css'
import Debaixo2 from './components/layout/af/Debaixo2';
import Iniciantes from './components/layout/af/Iniciantes';
import TutorialTodo from './components/layout/af/TutorialToDo'
import Site from './components/layout/af/Inicio'


export default class App extends Component{
    
    
    render(){
        return(
            
            <BrowserRouter>
            <Navbarr/>
            <Switch>
                <Route exact path='/' component={Site}/>
                <Route path='/article/:id' component={ProjectDetails}/>
                <Route exact path='/todos' component={TutorialTodo}/>
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                <Route path='/acctracker' component={Contas} />
                <Route path='/test' component={Navbarr}/>
            </Switch>
            </BrowserRouter>
        )
    }
}