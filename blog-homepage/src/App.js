import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './_data/your-articles.json'
import missed from './_data/missed-articles.json'


import Articles from './articles.js';
import Missed from './missed.js'
import Author from './author.js';




function App() {
  return (
    <div >
      {articles.map((article, i) => <Articles key={i} data={article} />)}
      {articles.map((article, i) => <Author key={i} data={article} />)}
      {missed.map((missed, i) => <Missed key={i} data={missed} />)}
      {missed.map((missed, i) => <Author key={i} data={missed} />)}
    </div>

  );
};


export default App;
