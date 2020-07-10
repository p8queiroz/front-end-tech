import React from 'react';

const Answer = ({ _answer }) => {

    const answerhtml = () => {
        return { __html: _answer };
    }

    return (
        <React.Fragment>
            <div dangerouslySetInnerHTML={answerhtml()}></div>
        </React.Fragment>
    );
}
export default Answer;