import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useState } from "react";
import { Button, Modal, Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import {$,jQuery} from 'jquery';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [show, setShow] = useState(false);
    const [contactMessage, setMessage] = useState('Message was Successfully Sent');

    const handleClose = () => setShow(false);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    // // function for submitting
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:3000/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ formDetails }),
    //     });

    //     setButtonText("Send");
    //     let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code == 200) {
    //       setStatus({ succes: true, message: 'Message sent successfully'});
    //     } else {
    //       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     }
    //   };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm(
                "service_ezplt8c", 
                "template_k6a9rfr", 
                form.current, 
                "96vtMvbTpxiGFBce6")
        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent")
                // setStatus({ success: true, message: 'Message sent successfully'});
                
                setShow(true)
            }, (error) => {
                console.log(error.text);
                // setStatus({ success: false, message: 'Something went wrong, please try again later.'});
                setMessage('Something went wrong, please try again later.')
                setShow(true)
            }
        );
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me"/>
                    </Col>


                    {/* Contains the form */}
                    <Col>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                                </Col>
                                <Col>
                                    <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required />
                                    {/* this is a variable since it gets updated from send to sending back to send*/}
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} className="modal">
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{contactMessage}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            
        </section>
    )
}