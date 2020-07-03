import React, { useState } from 'react';
import CardQuestion from '../card/CardQuestion';
import './QuestionList.css';

const QuestionList = ({ questions }) => {

    const handleSelect = (event) => {
        const { target: { value } } = event; /******/
        console.log(value);
    }

    return (
        <React.Fragment>
            <div className="options">
                <span>Technology</span>
                <select title="Technology" onChange={handleSelect}>
                    <option value=""></option>
                    <option value="javascript">javascript</option>
                    <option value="react">React</option>
                    <option value="dotnet">.net</option>
                </select>
                <span>Level</span>
                <select title="Technology">
                    <option value=""></option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="intermidiate">intermidiate</option>
                    <option value="hard">hard</option>
                </select>
            </div>
            <section className="cards">
                {questions.map((question) =>
                    <CardQuestion key={question._id} question={question.description} />
                )}
            </section>
        </React.Fragment>
    );
}
export default QuestionList;