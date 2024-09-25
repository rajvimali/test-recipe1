import React, { useState, useEffect } from 'react';
import { createRecipe, updateRecipe, getRecipeById } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeForm = ({ isEdit }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipeData, setRecipeData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        cuisineType: '',
        cookingTime: 0,
    });

    useEffect(() => {
        if (isEdit && id) {
            const fetchRecipe = async () => {
                const response = await getRecipeById(id);
                setRecipeData(response.data);
            };
            fetchRecipe();
        }
    }, [id, isEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEdit) {
            await updateRecipe(id, recipeData);
        } else {
            await createRecipe(recipeData);
        }

        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData({ ...recipeData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={recipeData.title}
                onChange={handleChange}
                required
            />

            <label>Ingredients (comma-separated):</label>
            <input
                type="text"
                name="ingredients"
                value={recipeData.ingredients}
                onChange={handleChange}
                required
            />

            <label>Instructions:</label>
            <textarea
                name="instructions"
                value={recipeData.instructions}
                onChange={handleChange}
                required
            />

            <label>Cuisine Type:</label>
            <input
                type="text"
                name="cuisineType"
                value={recipeData.cuisineType}
                onChange={handleChange}
                required
            />

            <label>Cooking Time (in minutes):</label>
            <input
                type="number"
                name="cookingTime"
                value={recipeData.cookingTime}
                onChange={handleChange}
                required
            />

            <button type="submit">{isEdit ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
};

export default RecipeForm;
