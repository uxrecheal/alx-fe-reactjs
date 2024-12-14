import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleChange = (e) => {
    const name= e.target.name;
    const value = e.target.value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.steps) {
      alert('All fields are required!');
      return;
    }
    console.log('Submitted data:', formData);
    // Reset form
    setFormData({ title: '', ingredients: '', steps: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-200"
            placeholder="Enter the recipe title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-200"
            placeholder="List the ingredients, separated by commas"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-200"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
          <button
            type="button"
            onClick={() => setFormData({ title: '', ingredients: '', steps: '' })}
            className="w-full md:w-auto bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
