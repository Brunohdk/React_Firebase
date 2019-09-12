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
        console.log(this.state.activeRecipe);
    }

    render(){
        return(
            <div>
            <div className="container">
                    <h1 style={{display:'flex',justifyContent:'center', marginBottom:'10px', fontSize:'50px'}}>{this.state.activeRecipe.title}</h1>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={this.state.activeRecipe.image_url}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Recipe