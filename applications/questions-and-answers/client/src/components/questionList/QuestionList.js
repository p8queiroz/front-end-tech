import React from 'react';
import Question from '../question/Question';
import Loader from '../loader/Loader';
import QuestionFilter from '../questionFilter/QuestionFilter';
import './QuestionList.css';


const QuestionList = () => {

    const [isLoading, setLoading] = React.useState(true);
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
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
                setQuestions(data);
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, []);

    const filter = () => {
        let technology = localStorage.getItem('select-filter-first');
        let level = localStorage.getItem('select-filter-second');
        setQuestions(questions.filter(item => (technology ? item.technology === technology : true)).filter(item => (level ? item.level === level : true)));
    }

    return (
        <React.Fragment>
            <QuestionFilter callbackfilter={filter} ></QuestionFilter>
            <section className="cards">
                {isLoading && <Loader />}
                {questions && questions.map((question) =>
                    <Question key={question.id} question={question} />
                )}
            </section>
        </React.Fragment>
    );
}
export default QuestionList;