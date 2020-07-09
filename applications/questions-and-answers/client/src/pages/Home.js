import React from 'react';
import QuestionList from '../components/questionList/QuestionList';

const HomePage = ({ _questions }) => {
    return (
        <React.Fragment>
            <QuestionList _questions={_questions} />
        </React.Fragment>
    );
}
export default HomePage;