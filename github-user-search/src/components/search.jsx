import React, { useState } from 'react';

const Search = ({ fetchUserData }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUserData(username);
      setUsername('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center text-blue-600">GitHub User Search</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 mt-6"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
