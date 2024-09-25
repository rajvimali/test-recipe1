import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl">Recipe Management</div>
                <div className="space-x-4">
                    <Link to="/register" className="text-white">Register</Link>
                    <Link to="/login" className="text-white">Login</Link>
                    <Link to="/" className="text-white">Recipes</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
