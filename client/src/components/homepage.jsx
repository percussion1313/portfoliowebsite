import React, { Component } from 'react';
import { About } from './about'
import Background from './img/printtoscreen2.png'
import { render } from 'react-dom';

import Footer from './footer'

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
            </React.Fragment>
        )
    }
}

export default HelloWorld;