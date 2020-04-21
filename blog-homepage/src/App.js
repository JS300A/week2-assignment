import React from 'react';
//import logo from './logo.svg';
import './App.css';
import articlesData from './_data/your-articles.json'
import missedArticlesData from './_data/missed-articles.json'


import Articles from './articles.js';
import MissedArticles from './missedArticles.js'


function App() {
  return (
    <div className="wrap">
      <div className="articles">
        {articlesData.map((articlesData, i) => <Articles key={i} data={articlesData} />)}
      </div>
      <div className="missedArticles">
        {missedArticlesData.map((missedArticlesData, i) => <MissedArticles key={i} data={missedArticlesData} />)}
      </div>
    </div>
  );
};


export default App;
