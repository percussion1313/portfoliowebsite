import React, { Component } from 'react';
import Background from './img/printtoscreenprint.svg'
import { render } from 'react-dom';
import ReactSVG from 'react-svg'

import Footer from './footer'
import { get } from 'https';

class HelloWorld extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        
        
    }

    
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div id="homepagebg" className="d-flex justify-content-center col-12">
                        <img className="bgphoto img-fluid" src={Background} alt="" />
                    </div>
                </div>
                <div className="about-footer">
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default HelloWorld;