import * as React from 'react';
import { Nav, Container, Row, Col, Tab} from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png";
import cuisina from "../assets/img/cuisina.png";
import colorful from "../assets/img/colorful-image-colorization.png";
import pomogochi from "../assets/img/pomogochi.png";
import mlsdlsu from "../assets/img/mls-dlsu.png";
import restoring from "../assets/img/restoring-unsigned-division-simulator.png";
import traceph from "../assets/img/tracePH.png";
import youexperience from "../assets/img/Artworks/youexperience.png";
import tech from "../assets/img/Artworks/tech.png";
import goodluck from "../assets/img/Artworks/goodluck.png";
import chinese from "../assets/img/Artworks/chinese.png";
import codm from "../assets/img/Artworks/codm.png";
import breaking from "../assets/img/Artworks/break.jpg";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const developments = [
        {
            title: "Cuisina",
            description: "E-commerce Web Application",
            imgUrl: cuisina,
        },
        {
            title: "Pomogochi",
            description: "Productivity and Time-Management Mobile Application",
            imgUrl: pomogochi,
        },
        {
            title: "Colorful Image Colorization",
            description: "Image Colorizer Web Application",
            imgUrl: colorful,
        },
        {
            title: "Restoring Unsigned Division Simulator",
            description: "Computer Unsigned Division Simulator Java Application",
            imgUrl: restoring,
        },
        {
            title: "TracePH",
            description: "Contact Tracing Java Application",
            imgUrl: traceph,
        },
    ];

    const artworks = [
        {
            title: "Break the C-mulation",
            imgUrl: breaking,
        },
        {
            title: "C-Games",
            imgUrl: codm,
        },
        {
            title: "Chinese New Year",
            imgUrl: chinese,
        },
        {
            title: "Good Luck Midterms",
            imgUrl: goodluck,
        },
        {
            title: "Tech Careers",
            imgUrl: tech,
        },
        {
            title: "YouExperience",
            imgUrl: youexperience,
        },
    ];

    const hci = [
        {
            title: "MLS DLSU Prototype",
            imgUrl: mlsdlsu,
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are the projects I've developed and crafted over the years.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Websites/Applications</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX High Fidelity</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Artworks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            developments.map((development, index1) => {
                                                return (
                                                    <ProjectCard
                                                        key={index1}
                                                        {...development}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                        <Row>
                                                {
                                                    hci.map((hci, index2) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index2}
                                                                {...hci}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                            </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                        <Row>
                                                {
                                                    artworks.map((artwork, index3) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index3}
                                                                {...artwork}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                            </Tab.Pane>
                            </Tab.Content>
                                
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}