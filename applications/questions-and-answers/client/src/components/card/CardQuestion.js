import React from 'react';

const CardQuestion = ({ question }) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="content">
                    <div className="question">
                        <div className="circle-container">
                            <div class="outer circle">
                                <div class="inner circle">
                                    <div className="question-mark">?</div>
                                </div>
                            </div>
                        </div>
                        <p>{question}</p>
                    </div>
                    <div className="options">
                        <div className="awnser-option">
                            <div class="chat icon"></div>
                        </div>
                        <div className="social">
                            <div className="twitter">
                                <div class="retweet icon"></div>
                            </div>
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