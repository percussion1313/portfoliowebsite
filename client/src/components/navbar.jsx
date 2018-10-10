import React from 'react';
import logo from './img/logofront.png'
import { Link } from 'react-router-dom';

const NavigationStation = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-1" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex justify-content-center">
                            <Link to="about" className="nav-link text-light ml-5" href="#">About</Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link to="contact" className="nav-link text-light ml-5" href="#">Contact</Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <a className="nav-link text-light ml-5" href="#">Projects</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <a className="nav-link text-light ml-5" href="#">Doodles</a>
                        </li>
                    </ul>
                </div>
                <Link to="/"><img  className="d-flex justify-content-center position-absoulte" src={logo} alt="Placeholder" width="80px"/></Link>
            </nav>
        </React.Fragment>
    );
}

export default NavigationStation;