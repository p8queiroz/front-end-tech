import React, { useState } from 'react';

const Footer = () => {
    const [steps, setSteps] = useState(0);

    const increment = () => {
        setSteps(prevState => prevState + 1);
    }

    return (
        <React.Fragment>
            <div>footer...</div>
        </React.Fragment>
    );
}
export default Footer;