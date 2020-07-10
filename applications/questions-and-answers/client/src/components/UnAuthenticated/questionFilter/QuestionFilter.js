import React from 'react';
import Select from './select/Select';

const QuestionFilter = ({ callbackfilter }) => {

    const [clear, setClear] = React.useState(false);

    const clearfunction = () => {
        localStorage.setItem('select-filter-first', '');
        localStorage.setItem('select-filter-second', '');
        callbackfilter(true);
        setClear(true);
    }

    React.useEffect(() => {
        setClear(false);
    }, [clear]);

    let optionsFirst = ["", "javascript", "react", ".net"];
    let optionsSecond = ["", "easy", "medium", "intermidiate", "hard"];

    return (
        <React.Fragment>
            <div className="filters">
                {!clear && <Select name="Technology" id="select-filter-first" options={optionsFirst} callbackfilter={callbackfilter} ></Select>}
                {!clear && <Select name="Level" id="select-filter-second" options={optionsSecond} callbackfilter={callbackfilter}></Select>}
                <div onClick={clearfunction}>
                    <div className="trash icon"></div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuestionFilter;