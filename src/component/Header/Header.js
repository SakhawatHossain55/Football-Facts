import React from 'react';
import { Button } from 'react-bootstrap';
const Header = () => {
    return (

        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"> Football Facts</a>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/"><Button variant="warning">Home</Button></a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};


export default Header;