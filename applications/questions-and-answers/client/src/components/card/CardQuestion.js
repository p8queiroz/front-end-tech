import React from 'react';

const CardQuestion = ({ question }) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="content">
                    <p>{question}</p>
                </div>
                <footer>
                    <div className="awnser">check as respostas</div>
                    <div className="social">
                        <div className="twitter">FB</div>
                        <div className="twitter">TW</div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
}
export default CardQuestion;