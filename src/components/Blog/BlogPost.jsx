import { Card, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";




function Blogpost({ post }) {

    return (

        <Container className="mb-5">
            <Row>
                <Col lg={9}>
                    <Card>
                        <Card.Body>{post.description}</Card.Body>
                    </Card>
                    <Row>

                        <Col>
                            <Card>
                                <Card.Title>sss</Card.Title>
                            </Card>
                        </Col>

                    </Row>
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Row>

        </Container >
    );
}

export default Blogpost;