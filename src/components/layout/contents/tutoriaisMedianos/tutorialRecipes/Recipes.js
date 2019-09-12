import React, {Component} from 'react';
import './styles/allStyles.css'

import ResultRecipes from './components/ResultRecipes';
import Form from './components/Form';

const API_KEY = "b9320b3d6179a41abc989892493be938";


class Recipes extends Component {

state={
    recipes: []
}

getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.inputRecipes.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
}


    render(){
        return(
            <div className="body container">
                <header>
                    <h1>Recipe Search</h1>
                    <Form getRecipe={this.getRecipe} />
                </header>
                <ResultRecipes recipes={this.state.recipes} />
            </div>
        )
    }
};

export default Recipes;