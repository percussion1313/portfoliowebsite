import React, { Component } from 'react';
import { sendContactEmail } from '../../services/contact';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleName(name) {
        this.setState({
            name
        })
    }
    handleEmail(email) {
        this.setState({
            email
        })
    }
    handleMessage(message) {
        this.setState({
            message
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
            .then(() => {
                //redirect to homepage
                this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="container padding-top margin-bottom" >
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <input htmlFor="name" placeholder="Name" onChange={(e) => this.handleName(e.target.value)} name="name" type="text" className="form-control rounded-0 col-8 mx-auto" required />
                    </div>
                    <div className="form-group">
                        <input htmlFor="email" placeholder="Email" onChange={(e) => this.handleEmail(e.target.value)} email="mail" type="email" className="form-control rounded-0 col-8 mx-auto" required />
                    </div>
                    <div className="form-group">
                        <textarea onChange={(e) => this.handleMessage(e.target.value)} cols="30" rows="10" className="form-control rounded-0 col-8 mx-auto"></textarea>
                        <input type="submit" className="btn btn-success d-flex justify-content-center col-3 rounded-0 mx-auto mt-2" />
                    </div>

                </form>
                <div className="d-flex justify-content-center map position-relative">
                </div>
            </div>
        );
    }
}

export default Contact