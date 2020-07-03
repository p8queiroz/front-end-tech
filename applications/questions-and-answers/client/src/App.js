import React from 'react';
import './App.css';
import data from './data/data';
import QuestionList from './components/cardList/QuestionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className="container">
        <QuestionList questions={data} />
      </section>
      <footer>
        this is the footer
      </footer>
    </div>
  );
}

export default App;
