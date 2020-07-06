import React, { useEffect } from 'react';
import './App.css';
import data from './data/data';
import QuestionList from './components/questionList/QuestionList';
import Footer from './components/footer/Footer';

function App() {

  const [questions, setQuestion] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {

    let init = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://quizzertech.com/system/wp-json/application-api/v1/om-question', init)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuestion(data);
        setLoading(false);
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>I.T. Questions and answers for interview / certification</h1>
      </header>
      <section className="container">
        {!isLoading &&
          <QuestionList _questions={questions} />}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
