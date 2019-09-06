import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Todos from './components/layout/contents/toDos'
import Contas from './components/layout/contents/contas'
import Dashboard from './components/layout/pagination/dashboard'
import ProjectDetails from './components/layout/pagination/projectDetails'
import Navbarr from './components/layout/af/Navbar'
import './index.css'
import TutorialTodo from './components/layout/af/TutorialToDo'
import TutorialAccTracker from './components/layout/contents/IniAccTracker'
import TutorialAccTracker2 from './components/layout/contents/testetracker/App'
import Site from './components/layout/af/Inicio'




export default class App extends Component{
    
    
    render(){
        return(
            
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Site}/>
                <Route path='/article/:id' component={ProjectDetails}/>
                <Route exact path='/todos' component={TutorialTodo}/>
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                <Route path='/acctracker' component={TutorialAccTracker2} />
                <Route path='/test' component={Navbarr}/>
            </Switch>
            </BrowserRouter>
        )
    }
}