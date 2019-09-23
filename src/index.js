import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from './users';
import Contact from './contact';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// // Put any other imports below so that CSS from your
// // components takes precedence over default styles.


const routing = (
    <Router>
        <div>
            <Container>
                <Row >
                    <Col className="tab"><Link to="/home">Home</Link></Col>
                    <Col className="tab"><Link to="/users">Users</Link></Col>
                    <Col className="tab"><Link to="/contact">Contact</Link></Col>
                </Row>
            </Container>

            <Route path="/home" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
