import React, { useState } from 'react';

const QuestionList = ({ questions }) => {
    //  const [steps, setSteps] = useState(0);

    const handleSelect = (event) => {
        const { target: { value } } = event; /******/
        console.log(value);
    }


    return (
        <React.Fragment>
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
            <ul>
                {questions.map((question) =>
                    <li key={question._id}>{question.description}</li>
                )}
            </ul>
        </React.Fragment>
    );
}
export default QuestionList;