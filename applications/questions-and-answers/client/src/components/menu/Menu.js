import React from 'react';
import './Menu.css';

const Menu = () => {

    const close = () => {
        document.getElementById("side-bar-nav").style.width = "0";
    }

    const open = () => {
        document.getElementById("side-bar-nav").style.width = "10rem";
    }

    const links = [
        "Home",
        "about",
        "favorits",
        "contact",
        "login",
        "github"
    ]

    return (
        <React.Fragment>
            <div className="side-nav-wrapper">
                <div>
                    <div id="side-bar-nav" className="sidenav">
                        <a href="/#" className="closebtn" onClick={close}>&times;</a>
                        {
                            links.map((item) => <a key={`side-bar-nav-${item}`} href="/#">{item}</a>)
                        }
                    </div>
                </div>
                <div>
                    <span onClick={open}>&#9776;</span>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Menu;