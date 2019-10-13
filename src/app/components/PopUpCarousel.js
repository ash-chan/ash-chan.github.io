import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel';



function PopUpCarousel(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel style={{marginBottom: '20px'}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p>
                    {props.details}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PopUpCarousel;
