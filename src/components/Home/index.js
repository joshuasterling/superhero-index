import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('Batman');
  const [results, setResults] = useState([]);

  const searchName = async (event) => {
    event.preventDefault();
    const res = await axios.get(`${API_URL}/search/Batman`);
    setResults(res.data);
    console.log(results);
  };

  // useEffect(searchName);
  return (
    <div>
      Hello this is the Home component
      <form onSubmit={searchName}>
        <input
          value={searchTerm}
          placeholder="Search for a SuperHero"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
