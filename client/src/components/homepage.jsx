import React, { Component } from 'react';
import Background from './img/background.png'
import { render } from 'react-dom';
import Footer from './footer'

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div id="homepagebg" className="d-flex justify-content-center col-12">
                        <img className="bgphoto" src={Background} alt="" />
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