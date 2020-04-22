import React, { useState, useEffect } from 'react';
import { accessToken } from '../../config.json';
import axios from 'axios';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('Batman');
  const [results, setResults] = useState([]);

  const searchName = async (event) => {
    event.preventDefault();
    const res = await axios.get(`https://superheroapi.com/api/${accessToken}/search/${searchTerm}`, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    });
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
