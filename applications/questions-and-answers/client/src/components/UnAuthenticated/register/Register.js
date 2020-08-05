import React from 'react';
import { useInput } from '../../../utils/hooks/useInput';
import './Login.css';
import { login } from '../../../services/Login';
import { useHistory } from "react-router-dom";

const Register = () => {

    let history = useHistory();

    const { value: userName, bind: bindUserName, reset: resetUserName } = useInput('');
    const { value: pw, bind: bindPw, reset: resetPassword } = useInput('');

    const handleLogin = (evt) => {
        evt.preventDefault();
        login({ username: userName, password: pw }).then((() => history.push('/')));
        resetUserName();
        resetPassword();
    }

    const handleRegister = (evt) => {
        evt.preventDefault();
        alert(`reg -Submitting Name ${userName} - ${pw}`);
    }

    return (
        <React.Fragment>
            <div className="loginPage">
                <form onSubmit={handleLogin}>
                    <ul className="flex-outer">
                        <li>
                            <label>Name </label>
                            <input type="text" autoComplete="on"  {...bindUserName} />
                        </li>
                        <li>
                            <label>Password </label>
                            <input type="password" autoComplete="current-password" {...bindPw} />
                        </li>
                        <li>
                            <button type="submit">Login</button>
                            <button onClick={handleRegister}>Register</button>
                        </li>
                    </ul>
                </form>
            </div>
        </React.Fragment>
    );
}
export default Register;