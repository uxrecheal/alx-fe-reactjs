import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError('All fields are required.');
      return;
    }

    if (formData.ingredients.split(',').length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    setError('');
    // Handle form submission (e.g., send data to server or update state)
    console.log('Recipe submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        className="bg-white shadow-lg rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="mb-4 text-red-600 font-medium">{error}</div>
        )}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            placeholder="Enter the recipe title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            placeholder="e.g., eggs, milk, flour"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            placeholder="Describe the preparation steps"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
