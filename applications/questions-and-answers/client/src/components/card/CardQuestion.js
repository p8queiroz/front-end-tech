import React from 'react';

const CardQuestion = ({ question }) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="content">
                    <div className="question">
                        <div className="question-mark">?</div>
                        <p>{question}</p>
                    </div>
                    <div className="options">
                        <div className="awnser">check as respostas</div>
                        <div className="social">
                            <div className="twitter">FB</div>
                            <div className="twitter">TW</div>
                        </div>
                    </div>
                    <div className="answer">
                        testando respostas.....
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default CardQuestion;