import React from 'react';
import './App.css'
import Search from './components/search';

const App = () => {
  return (
      <div>
          <h1>GitHub User Search</h1>
          <p>Start searching GitHub profiles!</p>
          <Search />
      </div>
  );
};

export default App
