import React from 'react';

const Form = ({getRecipe}) => (
    <form onSubmit={getRecipe}>
        <input type="text" name="inputRecipes" placeholder="Chicken Salad"/>
        <button>Search</button>
    </form>
);

export default Form