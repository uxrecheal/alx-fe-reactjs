import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required.';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required.';
    if (formData.ingredients.split(',').length < 2)
      newErrors.ingredients = 'Please include at least two ingredients.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Clear the form after successful submission
      setFormData({ title: '', ingredients: '', steps: '' });
      alert('Recipe submitted successfully!');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
