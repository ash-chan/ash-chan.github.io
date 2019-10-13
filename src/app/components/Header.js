import React from 'react'

import './Wrapper.css'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col";

import {MainHeading} from '../config/Typography'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
                <Col md={12}>
                    <div className="page-header">
                        <MainHeading> Ash's Page </MainHeading>
                    </div>
                </Col>

        )
    }
}
