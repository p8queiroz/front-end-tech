import React from 'react';
import './App.css';
import data from './data/data';
import QuestionList from './components/cardList/QuestionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Questions and answers for interview / certification</h1>
      </header>
      <section className="container">
        <QuestionList _questions={data} />
      </section>
      <footer>
        this is the footer
      </footer>
    </div>
  );
}

export default App;
