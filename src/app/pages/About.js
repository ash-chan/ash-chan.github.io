import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

// import css file About.css
import './About.css'
// Import Container component
import Container from './../components/Container'

const WELCOME_TEXT = (
    <div>
        <p>
            Hey there! Welcome to my humble little corner on the internet.
            I am Ash, a fourth year computer engineering student under the
            Renaissance Engineering Programme at Nanyang Technological University.
        </p>
        <p>
            I recently spent a year in the United States, where I spent a full academic year
            studying CS at University of California, Berkeley before interning at Cisco Systems
            as a Software Engineering Intern for the summer.
        </p>
        <p>
            I am currently looking for Summer 2020 internship opportunities but would also be
            interested in doing a Winter 2019 or part-time internship if the opportunity arises.
        </p>
    </div>
)
const CONTACT_TEXT = (
    <div>
        <p><b>Email: </b><a href="mailto:ashleychancj@berkeley.edu">ashleychancj@berkeley.edu</a></p>
        <p><b>GitHub: </b><a target='_black' href="https://github.com/ash-chan">ash-chan</a></p>
        {/*<p><b>Resume: </b>View</p>*/}
    </div>
);


export default class About extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            aboutDone: false,
            contactDone: false
        }
        this.aboutDone = this.aboutDone.bind(this);
        this.contactDone = this.contactDone.bind(this);
    }
    render () {
        return (
            <Container>
                        <div className={'terminal terminal-about'}>
                            <div className={'terminal-header'}>
                                About Me
                                <div className={'terminal-buttons'}>
                                    <div className={'terminal-button terminal-button-red'} />
                                    <div className={'terminal-button terminal-button-yellow'} />
                                    <div className={'terminal-button terminal-button-green'} />
                                </div>
                            </div>
                            <Typist cursor={{hideWhenDone:true, hideWhenDoneDelay: 0}}
                                    avgTypingDelay={50} startDelay = {500}
                                    onTypingDone={this.aboutDone}>
                                <b> $ cat about_me.txt</b>
                            </Typist>
                            {this.state.aboutDone ?
                                WELCOME_TEXT
                            : ' '
                            }
                            {this.state.aboutDone ?
                                <Typist cursor={{hideWhenDone:true, hideWhenDoneDelay: 0}}
                                        avgTypingDelay={50} startDelay = {500}
                                        onTypingDone={this.contactDone}>
                                    <b> $ cat contact_me.txt</b>
                                </Typist> : ' '
                            }
                            {this.state.contactDone ?
                                CONTACT_TEXT
                                : ' '
                            }
                            {this.state.contactDone ?
                                <Typist avgTypingDelay={70}>
                                    <span>$ ~ </span>
                                </Typist> : ' '
                            }
                        </div>
            </Container>
        )
    }
    aboutDone(){
        this.setState({aboutDone: true});
    }
    contactDone(){
        this.setState({contactDone: true});
    }
}