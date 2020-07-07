import React, { useEffect } from 'react';
import './App.css';
//import data from './data/data';
import QuestionList from './components/questionList/QuestionList';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';

function App() {

  const [questions, setQuestion] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [siteInfo, setSiteInfo] = React.useState({});

  useEffect(() => {

    let init = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://quizzertech.com/system/wp-json', init)
      .then(response => response.json())
      .then(data => {
        setSiteInfo({ title: data.name, description: data.description })
        fetch('http://quizzertech.com/system/wp-json/application-api/v1/om-question', init)
          .then(response => response.json())
          .then(data => {
            setQuestion(data);
            setLoading(false);
          })
          .catch((error) => console.log(error))

      })

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{siteInfo.title ? siteInfo.title : ''}</h1>
        <span>{siteInfo.description ? siteInfo.description : ''}</span>
      </header>
      <section className="container">
        {
          isLoading ? <Loader /> : <QuestionList _questions={questions} />
        }
      </section>
      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
