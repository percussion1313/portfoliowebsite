import React, { Component } from 'react';
import logo from './img/newfakelogo3.png'
import { Link } from 'react-router-dom';

// import React, { Component } from 'react';

class NavigationStation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        
    }

    render() {
        return (<React.Fragment>
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
                            <Link to="projects" className="nav-link text-light ml-5" href="#">Projects</Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link to="doodles" className="nav-link text-light ml-5" href="#">Doodles</Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link to="contact" className="nav-link text-light ml-5" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="float-left">
                <Link to="/"><img  className="d-flex justify-content-centerc" src={logo} alt="Placeholder" width="70px"/></Link>
                </div>
                
            </nav>
        </React.Fragment>)
    }
}

export default NavigationStation;
