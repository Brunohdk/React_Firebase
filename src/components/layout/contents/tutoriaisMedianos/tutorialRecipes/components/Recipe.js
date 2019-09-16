import React, {Component} from 'react';

const API_KEY = "b9320b3d6179a41abc989892493be938";

class Recipe extends Component {

    state={
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe.title;
        const req_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req_call.json();
        this.setState({activeRecipe: res.recipes[0]});
    }

    render(){
        return(
            <div className="recipe">
            <div className="container recipebox">
                    <h1>{this.state.activeRecipe.title}</h1>
                <div className="img_recipe" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.image_url}/>
                </div>
                <div className="recipe_desc">
                    <p>Publicado por: {this.state.activeRecipe.publisher}</p>
                    <button><a href={this.state.activeRecipe.source_url}>Passo a passo da receita completa!</a></button>
                </div>
            </div>
            </div>
        )
    }
}

export default Recipe