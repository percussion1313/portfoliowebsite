import React, { Component } from 'react';
import logo from './img/newfakelogo3.png'
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

// import React, { Component } from 'react';

class Navbar extends Component {

    
    scrollToTop() {
        scroll.scrollToTop();
      };

    render() {
        return (<React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <Link to="/"><img className="mx-auto" src={logo} alt="Placeholder" width="70px" onClick={this.scrollToTop} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-light ml-5"
                                onclick={$('[about-page]').animatescroll()}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-light ml-5"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="doodles"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-light ml-5"
                            >
                                Doodles
                            </Link>
                        </li>
                        <li className="nav-item d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-light ml-5"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>)
    }
}

export default Navbar;
