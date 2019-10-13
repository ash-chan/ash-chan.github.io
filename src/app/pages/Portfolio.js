import React from 'react'
import styled from 'styled-components'

import PopUpNormal from '../components/PopUpNormal';
import PopUpCarousel from '../components/PopUpCarousel';

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from '../config/Typography'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'

import chancez from '../../static/ChanceZ.png'
import erc721 from '../../static/ERC721.png'
import ChancezSite1 from '../../static/ChancezSite1.png'
import ChancezSite2 from '../../static/ChancezSite2.png'
import ChancezSite3 from '../../static/ChancezSite3.png'
import port from '../../static/Port.jpg'
import Road from '../../static/Road.jpg'
import Sliding from '../../static/Sliding.jpg'
import Stack from '../../static/Stack.jpg'

const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`
const ChanceZDetails = (
    <div>
        <p>
            Conceptualized and developed a peer-to-peer platform with 4 other UC Berkeley students that connects
            college students to investors willing to finance their tuition loan
        </p>
        <p>
            Designed UI mockups of the platform using HTML and CSS
        </p>
        <p>
            Implemented Ethereum smart contracts for payment processing using the Truffle framework
        </p>

    </div>
)
const eBOLDetails = (
    <div>
        <p>
            Developing a Vue application that automatically processes Bills of Lading into an ERC-721 compliant token
        </p>
        <p>
            Exploring blockchain technologies such as <a target="_blank" href="https://swarm-gateways.net/bzz:/swarm.eth/">Swarm</a> and <a target="_blank" href="https://github.com/EYBlockchain/nightfall">Nightfall</a> to
            store bills and trade such tokens in a privacy-preserving manner.
        </p>
    </div>
)
const BuildAPortDetails = (
    <div>
        <p>
            Worked in a team to build a series of 3 mini-games in which the objective is to build a port.
        </p>
        <p>
            Score earned from mini-games is converted to cash to buy upgrades for the port.
        </p>
        <p>
            Code can be viewed here: <a target="_blank" href="https://github.com/ash-chan/build-a-port-unity">Build a Port</a>
        </p>
    </div>
)

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showPopup1: false,
            showPopup2: false,
            showPopup3: false,
        }
    }
    render () {
        return (
            <CardGroup>
                {/*#First card*/}
                <Card>

                    <Card.Img style={{height:'40%'}}variant="top" src={chancez} />
                    <Card.Body>
                        <Card.Title>ChanceZ</Card.Title>
                        <Card.Text>
                            Peer-to-Peer platform that helps college students find investors to finance their tuition loans.
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.setState({showPopup1: true})}>
                            Details
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Aug 2018 - Dec 2018</small>
                    </Card.Footer>
                </Card>
                {/*# First modal corresponding to first card*/}
                <PopUpCarousel
                    show={this.state.showPopup1}
                    onHide={() => this.setState({showPopup1: false})}
                    heading={<Subheading>ChanceZ (Startup Incubator Team)</Subheading>}
                    details={ChanceZDetails}
                    image1={ChancezSite1}
                    image2={ChancezSite2}
                    image3={ChancezSite3}
                />

                <Card>
                    <Card.Img style={{height:'40%'}}className="card-img-top" variant="top" src={erc721} />
                    <Card.Body>
                        <Card.Title>BoL Tokenization</Card.Title>
                        <Card.Text>
                            Vue App to automate Tokenization of Bill of Ladings
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.setState({showPopup2: true})}>
                            Details
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Jul 2019 - Present</small>
                    </Card.Footer>
                </Card>
                <PopUpNormal
                    show={this.state.showPopup2}
                    onHide={() => this.setState({showPopup2: false})}
                    heading={<Subheading>ERC-721 Tokenization of Bills of Lading</Subheading>}
                    details={eBOLDetails}
                />

                <Card>

                    <Card.Img style={{height:'40%'}}variant="top" src={port} />
                    <Card.Body>
                        <Card.Title>Build a Port</Card.Title>
                        <Card.Text>
                            Series of 3 different port-themed minigames built in Unity
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.setState({showPopup3: true})}>
                            Details
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Aug 2017 - Oct 2017</small>
                    </Card.Footer>
                </Card>
                {/*# First modal corresponding to first card*/}
                <PopUpCarousel
                    show={this.state.showPopup3}
                    onHide={() => this.setState({showPopup3: false})}
                    heading={<Subheading>Build a Port (Unity C# game)</Subheading>}
                    details={BuildAPortDetails}
                    image1={Stack}
                    image2={Sliding}
                    image3={Road}
                />
            </CardGroup>

        )
    }
}
{/*<div>*/}
{/*<Carousel>*/}
{/*    <CarouselItem>*/}
{/*        <img*/}

{/*            src={chancez}*/}
{/*            alt="First slide"*/}
{/*        />*/}
{/*        <CarouselCaption>*/}
{/*            <h3>First slide label</h3>*/}
{/*            <p>Nulla vitae elit dksnvkdsnvkdsnvldsnvndslvndsnvldsnvllibero, a pharetra augue mollis interdum.</p>*/}
{/*        </CarouselCaption>*/}
{/*    </CarouselItem>*/}
{/*    <CarouselItem>*/}
{/*        <img*/}
{/*            className="d-block w-100"*/}
{/*            src="holder.js/800x400?text=Second slide&bg=282c34"*/}
{/*            alt="Third slide"*/}
{/*        />*/}

{/*        <Carousel.Caption>*/}
{/*            <h3>Second slide label</h3>*/}
{/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
{/*        </Carousel.Caption>*/}
{/*    </CarouselItem>*/}
{/*    <Carousel.Item>*/}
{/*        <img*/}
{/*            className="d-block w-100"*/}
{/*            src="holder.js/800x400?text=Third slide&bg=20232a"*/}
{/*            alt="Third slide"*/}
{/*        />*/}

{/*        <Carousel.Caption>*/}
{/*            <h3>Third slide label</h3>*/}
{/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
{/*        </Carousel.Caption>*/}
{/*    </Carousel.Item>*/}
{/*</Carousel>*/}
{/*</div>*/}