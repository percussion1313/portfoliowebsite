import React from 'react';
import logo from './img/weblogo.png'
import { Link } from 'react-router-dom';
const NavigationStation = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <Link to="/"><img  src={logo} alt="Placeholder" width="60px"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="about" className="nav-link text-light" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link text-light" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Pretty Things</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationStation;