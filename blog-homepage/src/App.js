import React from 'react';
//import logo from './logo.svg';
import './App.css';
import articlesData from './_data/your-articles.json'
import missedArticlesData from './_data/missed-articles.json'


import Articles from './articles.js';
import MissedArticles from './missedArticles.js'
import Author from './author.js';


function App() {
  return (
    <div>
    <tr>
    <td>{articlesData.map((articlesData, i) => <Articles key={i} data={articlesData} />)}</td>
    <td>{articlesData.map((articlesData, i) => <Author key={i} data={articlesData} />)}</td>
    </tr>
    <tr>
    <td>{missedArticlesData.map((missedArticlesData, i) => <MissedArticles key={i} data={missedArticlesData} />)}</td>
    <td>{missedArticlesData.map((missedArticlesData, i) => <Author key={i} data={missedArticlesData} />)}</td>
    </tr>

   </div>
  );
};


export default App;
