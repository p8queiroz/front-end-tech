import React from 'react';

const QuestionFilter = ({ callback }) => {

    return (
        <div className="options">
            <span>Technology</span>
            <select id="technology" onChange={callback}>
                <option value=""></option>
                <option value="javascript">javascript</option>
                <option value="react">React</option>
                <option value="dotnet">.net</option>
            </select>
            <span>Level</span>
            <select id="level" onChange={callback}>
                <option value=""></option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="intermidiate">intermidiate</option>
                <option value="hard">hard</option>
            </select>
        </div >
    )
};

export default QuestionFilter;