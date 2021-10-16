import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import frameimg from '../assets/9159.jpeg'
import frameimg1 from '../assets/2188603.png'

import { Fragment } from 'react';

const Header = () => {
    return (
        <Container className="mt-5">
            <Row >
                <Col lg={6} >
                    <Card className="text-white h-100">
                        <Card.Img src={frameimg1} className="img-fluid h-100" />
                        <Card.ImgOverlay>
                            <Card.Title>Blog post</Card.Title>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                {/* second coll */}
                <Col>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Img src={frameimg} />
                                <Card.ImgOverlay>
                                    <Card.Title>Blog post</Card.Title>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-md-6 mt-3">
                            <Card className="text-white">
                                <Card.Img src={frameimg1} />
                                <Card.ImgOverlay>
                                    <Card.Title>Blog post</Card.Title>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-md-6 mt-3">
                            <Card className="text-white">
                                <Card.Img src={frameimg1} />
                                <Card.ImgOverlay>
                                    <Card.Title>Blog post</Card.Title>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>

                </Col>

            </Row >

        </Container >
    )
}

export default Header;
