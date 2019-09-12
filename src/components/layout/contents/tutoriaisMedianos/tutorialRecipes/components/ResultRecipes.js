import React from 'react';
import {Link} from 'react-router-dom';

const ResultRecipes = props => (
    <div className="result">
        <div className="result1 row">
        {props.recipes.map(recipe => {
            return(
                <div key={recipe.recipe_id} className="col-md-4">
                    <div className="recipe_box">
                        <img src={recipe.image_url} alt={recipe.title} />
                        <div className="recipe_text">
                            <h5>{recipe.title.length < 20 ? `${recipe.title}` : 
                        `${recipe.title.substring(0, 25)}...`}</h5>
                            <hr />
                        <Link to={{pathname: `/recipe/${recipe.recipe_id}`,
                        state: {recipe: recipe}}}><button className="recipe_button">View Recipe</button></Link>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
);

export default ResultRecipes
    

