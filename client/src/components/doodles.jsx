import React, { Component } from 'react';
import SidePic from './img/cooldesign1.png'
class Doodles extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="mx-auto about-position doodle-page">MY DOODLES GO HERE
                <img class="float-right img-responsive img-fluid side-pic" src={SidePic} alt=""/></div>
              
            </React.Fragment>
        )
    }
}

export default Doodles;