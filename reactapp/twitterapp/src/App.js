import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Make a fetch request to the Flask app endpoint to retrieve tweets
    fetch(`http://localhost:5000/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ search_term: searchTerm })
    })
    .then(res => res.json())
    .then(data => setTweets(data.tweets))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for tweets" 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {tweets.map(tweet => (
          <div key={tweet.id}>
            <p>{tweet.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

