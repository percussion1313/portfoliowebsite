import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Loader } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from './navbar'
import Homepage from './homepage';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import Doodles from './doodles'
import Footer from './footer'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <HashRouter>
                <Fragment>
                    <Navbar />
                    <Homepage
                        title="Homepage"
                        id="homepage"
                    />
                    <About
                        title="About"
                        id="about"
                    />
                    <Projects
                        title="Projects"
                        id="projects"
                    />
                    <Doodles
                        title=" "
                        id="doodles"
                    />
                    <Contact
                        title="Section 5"
                        id="contact"
                    />
                    {/* <Homepage />
                    <About />
                    <Projects />
                    <Doodles />
                    <Contact />
                    <Footer /> */}
                    <Footer />
                </Fragment>
            </HashRouter>
        )
    }
}

export default Navigation;