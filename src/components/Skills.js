import * as React from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import javascript from "../assets/img/javascript.png";
import postgresql from "../assets/img/postgresql.png";
import nodejs from "../assets/img/nodejs.png";
import express from "../assets/img/express.png";
import sql from "../assets/img/sql.png";
import jupyter from "../assets/img/jupyter.png";
import photoshop from "../assets/img/photoshop.png";
import canva from "../assets/img/canva.png";
import git from "../assets/img/git.png";
import jquery from "../assets/img/jquery.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            item: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0}, 
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>These are some of my technical skills that I've honed</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>Web, Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src={postgresql} alt="Image" />
                                    <h5>Data Analysis, Database Management</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Backend</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="Image" />
                                    <h5>Data Analysis, Database Management</h5>
                                </div>
                                <div className="item">
                                    <img src={jupyter} alt="Image" />
                                    <h5>Data Analysis</h5>
                                </div>
                                <div className="item">
                                    <img src={photoshop} alt="Image" />
                                    <h5>Graphic Design</h5>
                                </div>
                                <div className="item">
                                    <img src={canva} alt="Image" />
                                    <h5>Graphic Design</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Version Control</h5>
                                </div>
                                <div className="item">
                                    <img src={jquery} alt="Image" />
                                    <h5>Web, Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>Web, Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>Web, Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Data Analysis</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Application, Backend</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}