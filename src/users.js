import React, { Component } from 'react';
import user from './user.svg';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="App">
                <h1>User Component</h1>
                <header className="App-header">
                    <img src={user} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default Users;