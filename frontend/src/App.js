import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import Navbar from "./components/Navbar"; // Import Navbar
import { RecipeProvider } from "./context/RecipeContext";

const App = () => {
  return (
    <RecipeProvider>
      <Router>
        <Navbar /> {/* Add the Navbar here */}
        <Routes>
          {/* Recipe List Route */}
          <Route path="/" element={<RecipeList />} />

          {/* Recipe Detail Route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* Add Recipe Form */}
          <Route path="/add-recipe" element={<RecipeForm isEdit={false} />} />

          {/* Edit Recipe Form */}
          <Route
            path="/edit-recipe/:id"
            element={<RecipeForm isEdit={true} />}
          />

          {/* Login Page Placeholder */}
          <Route
            path="/login"
            element={<div>Login Page (To be implemented)</div>}
          />

          {/* Register Page Placeholder */}
          <Route
            path="/register"
            element={<div>Register Page (To be implemented)</div>}
          />
        </Routes>
      </Router>
    </RecipeProvider>
  );
};

export default App;
