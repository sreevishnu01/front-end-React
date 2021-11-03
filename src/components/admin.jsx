import React, { Component } from 'react'
import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import BlogNewpost from './Blog/BlogNewpost'


export class admin extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col md={3} lg={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <BlogNewpost />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {/* <Sonnet /> */}
                                    </Tab.Pane>
                                </Tab.Content>

                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}

export default admin
