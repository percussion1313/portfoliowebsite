import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavigationStation from './navbar'
import Homepage from './homepage';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import Doodles from './doodles'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                <NavigationStation />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path ="/contact" component={Contact} />
                        <Route path ="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/doodles" component={Doodles} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;