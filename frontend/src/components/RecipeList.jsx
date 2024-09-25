import React, { useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { getAllRecipes } from '../api/api';

const RecipeList = () => {
    const { recipes, setRecipes } = useContext(RecipeContext);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await getAllRecipes();
            setRecipes(response.data);
        };

        fetchRecipes();
    }, [setRecipes]);

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        {recipe.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
