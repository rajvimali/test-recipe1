import React, { useState, useEffect } from 'react';
import { getRecipeById, deleteRecipe } from '../api/api';  // Import both functions
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await getRecipeById(id);
                setRecipe(response.data);
            } catch (error) {
                console.error('Failed to fetch recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    const handleEdit = () => {
        navigate(`/edit-recipe/${id}`);
    };

    const handleDelete = async () => {
        try {
            await deleteRecipe(id);
            navigate('/');
        } catch (error) {
            console.error('Failed to delete recipe:', error);
        }
    };

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients.join(', ')}</p>
            <p>{recipe.instructions}</p>
            <p>Cooking Time: {recipe.cookingTime} mins</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default RecipeDetail;
