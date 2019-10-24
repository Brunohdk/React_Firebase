import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import myTodos from './components/layout/contents/myTrashes/myTodos';
import myContas from './components/layout/contents/myTrashes/myContas';
import ProjectDetails from './components/layout/pagination/projectDetails';
import TutorialTodo from './components/layout/contents/tutoriaisIniciantes/tutorialTodo/TutorialToDo';
import TutorialAccTracker from './components/layout/contents/tutoriaisIniciantes/tutorialAccTracker/App';
import Site from './components/layout/af/Inicio';
import TutorialTetris from './components/layout/contents/tutoriaisAvancados/TetrisGame/tetrisApp';
import TutorialCalculator from './components/layout/contents/tutoriaisIniciantes/tutorialCalculator/tutorialCalculator';
import TutorialRecipes from './components/layout/contents/tutoriaisMedianos/tutorialRecipes/Recipes';
import TutorialRecipeId from './components/layout/contents/tutoriaisMedianos/tutorialRecipes/components/Recipe';
import TutorialWeather from './components/layout/contents/tutoriaisMedianos/tutorialWeatherApp/WeatherApp';
import Testar from './components/layout/contents/myTrashes/aff123/testarhabilidades';
import Testar2 from './components/layout/contents/myTrashes/aff123/testarhabi2';
import CellMarket from './components/layout/contents/tutoriaisAvancados/tutorialCellShopping/AppShopping';
import Teste from './store/testar.js'
import './index.css'


export default class App extends Component{
    
    
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Site}/>
                <Route path ='/aff123' component={Testar} />
                <Route path='/aff12' component={Testar2} />
                <Route path='/article/:id' component={ProjectDetails}/>
                <Route path='/todos' component={TutorialTodo}/>
                <Route path='/acctracker' component={TutorialAccTracker} />
                <Route path='/tetris' component={TutorialTetris} />
                <Route path='/calculator' component={TutorialCalculator} />
                <Route path='/recipes' component={TutorialRecipes} />
                <Route path='/recipe/:id' component={TutorialRecipeId} />
                <Route path='/weather' component={TutorialWeather} />
                <Route path='/cellmarket' component={CellMarket}/>
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                <Route path='/mytodos' component={myTodos}/>
                <Route path='/mycontas' component={myContas} />
                <Route path='/testar' component={Teste} />
            </Switch>
            </BrowserRouter>
        )
    }
}

