import React from 'react';

const Select = ({ id, name, options, callbackfilter }) => {

    const handleSelect = (event) => {
        const { target: { id, value } } = event;
        localStorage.setItem(id, value);
        callbackfilter();
    }

    return (
        <React.Fragment>
            <div>
                <span>{name}:</span>
                <select id={id} onChange={handleSelect}>
                    {
                        options.map((item) => (<option key={`${id}-opt-${item}`} value={item} >{item} </option>))
                    }
                </select>
            </div>
        </React.Fragment >
    );
}
export default Select;