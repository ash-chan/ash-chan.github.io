import React from 'react'
import Image from 'react-bootstrap/Image'
import BackPanel from '../components/BackPanel'
import {Heading, Subheading, Subject} from '../config/Typography'
import UCBLogo from '../../static/UCB.png'
import NTULogo from '../../static/NTU.png'

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        // this.props.renderCallback();
    }

    render() {
        return (
            <div>
                <div className="back-panel">
                    <Heading>Nanyang Technological University</Heading>
                    <Subheading style={{fontStyle:'italic'}}>
                        M.Sc in Technology Management & <br/> B.Eng.Sc in Computer Engineering
                    </Subheading>
                    <Subheading>
                        GPA : 4.82/5
                    </Subheading>
                    <Subheading>
                        Relevant Coursework:
                    </Subheading>
                        <ul>
                            <li>
                                <Subject>Computer Science</Subject>
                                <ul>
                                    <li>Algorithms (CE2001)</li>
                                    <li>Object-Oriented Design and Programming (CE2002)</li>
                                    <li>Operating Systems (CE2005)</li>
                                    <li>Software Engineering (CE2006)</li>
                                    <li>Intelligent Agents (CE4046)</li>
                                </ul>
                            </li>
                            <li>
                                <Subject>Computer Engineering</Subject>
                                <ul>
                                    <li>Digital Systems Design (CE2003)</li>
                                    <li>Microprocessor Systems (CE2007)</li>
                                    <li>Advanced Computer Architecture (CE3001)</li>
                                </ul>
                            </li>
                            <li>
                                <Subject>Business</Subject>
                                <ul>
                                    <li>Accounting (RE8002)</li>
                                    <li>Fundamentals of Management (RE8003)</li>
                                    <li>Financial Management (RE8005)</li>
                                    <li>Strategic Marketing (RE8010)</li>
                                </ul>
                            </li>

                        </ul>
                    </div>


                <div className="back-panel">

                    <Heading> University of California Berkeley</Heading>
                    <Subheading style={{fontStyle:'italic'}}>
                        Electrical Engineering & Computer Sciences
                    </Subheading>
                    <Subheading>
                        GPA : 3.38/4
                    </Subheading>
                    <Subheading>
                        Relevant Coursework:
                    </Subheading>
                    <ul>
                    <li>
                        <Subject>Computer Science</Subject>
                    <ul>
                        <li>Computer Security (CS161)</li>
                        <li>Advanced Algorithms and Intractable Problems (CS170)</li>
                        <li>Database Systems (CS186)</li>
                        <li>Artificial Intellingence (CS188)</li>
                        <li>Communication Networks (EE122)</li>
                        <li>Introduction to Data Analytics (INFO98)</li>
                    </ul>
                    </li>
                    </ul>
                </div>
            </div>

        );
    }
}
