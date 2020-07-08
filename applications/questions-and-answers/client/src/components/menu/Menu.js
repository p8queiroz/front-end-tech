import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {

    const close = (event) => {
        event.preventDefault();
        document.getElementById("side-bar-nav").style.width = "0";
    }

    const open = (event) => {
        event.preventDefault();
        document.getElementById("side-bar-nav").style.width = "10rem";
    }

    const links = [
        { title: "Home", to: "/home" },
        { title: "About", to: "/about" },
        { title: "Favorites", to: "/about" },
        { title: "Contact", to: "/about" },
        { title: "Login", to: "/about" },
        { title: "GitHub", to: "/github" }
    ];

    return (
        <React.Fragment>
            <div className="side-nav-wrapper">
                <div>
                    <div id="side-bar-nav" className="sidenav">
                        <a href="/#" className="closebtn" onClick={close}>&times;</a>
                        {links.map((item) => <Link key={`side-bar-nav-${item.title}`} to={item.to}>{item.title}</Link>)}
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