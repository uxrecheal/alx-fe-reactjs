import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Handles input changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; // Destructure event.target correctly
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update state based on input name
    }));
  };

  // Validates the form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Recipe title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" }); // Reset form
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Title Field */}
        <div className="mb-4 md:flex md:items-center">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2 md:w-1/3"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full md:w-2/3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4 md:flex md:items-start">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2 md:w-1/3"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className="w-full md:w-2/3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div className="mb-4 md:flex md:items-start">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2 md:w-1/3"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className="w-full md:w-2/3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:flex md:justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;