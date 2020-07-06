import React from 'react';
import Question from '../question/Question';
import QuestionFilter from '../questionFilter/QuestionFilter';
import './QuestionList.css';

const QuestionList = ({ _questions }) => {

    const [questions, setQuestions] = React.useState(_questions);

    const handleSelect = (event) => {
        const { target: { id, value } } = event;
        localStorage.setItem(id, value);
        filter();
    }

    const filter = () => {
        let technology = localStorage.getItem('technology');
        let level = localStorage.getItem('level');
        setQuestions(_questions.filter(item => (technology ? item.technology === technology : true)).filter(item => (level ? item.level === level : true)));
    }

    return (
        <React.Fragment>
            <QuestionFilter callback={handleSelect}></QuestionFilter>
            <section className="cards">
                {questions.map((question) =>
                    <Question key={question.id} question={question} />
                )}
            </section>
        </React.Fragment>
    );
}
export default QuestionList;