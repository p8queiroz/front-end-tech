import React from 'react';
import Question from '../question/Question';
import QuestionFilter from '../questionFilter/QuestionFilter';
import './QuestionList.css';

const QuestionList = ({ _questions }) => {

    const [questions, setQuestions] = React.useState(_questions);

    const filter = () => {
        let technology = localStorage.getItem('select-filter-first');
        let level = localStorage.getItem('select-filter-second');
        setQuestions(_questions.filter(item => (technology ? item.technology === technology : true)).filter(item => (level ? item.level === level : true)));
    }

    return (
        <React.Fragment>
            <QuestionFilter callbackfilter={filter} ></QuestionFilter>
            <section className="cards">
                {questions.map((question) =>
                    <Question key={question.id} question={question} />
                )}
            </section>
        </React.Fragment>
    );
}
export default QuestionList;