import React from 'react';
import Answer from '../answer/Answer';

const Question = ({ question }) => {

    const [isOpened, setIsOpened] = React.useState(false);
    let { description, answer } = question;

    const toggle = () => {
        setIsOpened(isOpened => !isOpened);
    }

    const share = () => alert("share this question!");

    const descriptionhtml = () => {
        return { __html: description };
    }

    return (
        <React.Fragment>
            <div className="card">
                <div className="content">
                    <div className={'question' + (isOpened ? ' active' : '')} onClick={toggle}>
                        <div className="circle-container">
                            <div className="outer circle">
                                <div className="inner circle">
                                    <div className="question-mark">?</div>
                                </div>
                            </div>
                        </div>
                        <p dangerouslySetInnerHTML={descriptionhtml()}></p>
                    </div>
                    <div className={'options' + (isOpened ? ' active' : '')}>
                        <div className="answer-option" onClick={toggle}>
                            <div className="chat icon"></div>
                        </div>
                        <div className="social" onClick={share}>
                            <div className="twitter">
                                <div className="retweet icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className={'answer' + (isOpened ? ' active' : '')}>
                        <Answer _answer={answer}></Answer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Question;