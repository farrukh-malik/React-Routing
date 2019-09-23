import React, { Component } from 'react';
import contact from './mail.svg';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="App">
                <h1>Contact Component</h1>
                <header className="App-header">
                    <img src={contact} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default Contact;