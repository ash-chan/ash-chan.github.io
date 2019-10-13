import React from 'react'

import Header from './../components/Header'
import NavSideBar from './../components/NavSideBar'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Nav, Navbar} from "react-bootstrap";

import '../Transitions.css'

export default class Wrapper extends React.Component {
    clickHandler() {
        const element = document.getElementById('slide-panel');
        element.style.transition = 'none';
        setTimeout(function () {
            element.style.transition = '';
        }, 5);
        element.classList.add('slide-out');
    }
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)

    }


    render() {

        return (
            <div className={'wrapper-style'} style={{backgroundColor: this.props.backgroundColor}}>
                <Container>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <Row id="slide-panel">
                        <Col>{this.props.children}</Col>
                        <Col md="auto">
                            <div className="nav-panel">
                            <Navbar sticky="top" >

                                <Nav activeKey={window.location.pathname} affix className="flex-column">

                                    <Nav.Link exact activeClassName="navbar__link--active"
                                              className="navbar__link" href='/' >
                                        <h3>About Me</h3>
                                    </Nav.Link>
                                    <Nav.Link activeClassName="navbar__link:active"
                                              className="navbar__link" href='/professional' >
                                        <h3>Professional</h3>
                                    </Nav.Link>
                                    <Nav.Link activeClassName="navbar__link--active"
                                              className="navbar__link" href='/education'>
                                        <h3>Education</h3>
                                    </Nav.Link>
                                    <Nav.Link activeClassName="navbar__link--active"
                                              className="navbar__link" href='/portfolio' >
                                        <h3>Portfolio</h3>
                                    </Nav.Link>
                                </Nav>

                            </Navbar>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}