import React from 'react';
import './App.css';
import data from './data/data';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuestionList questions={data} />
      </header>
    </div>
  );
}

export default App;
