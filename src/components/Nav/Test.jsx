import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Sidebar";

const randomImg = {
    image: 'https://picsum.photos/1000/750',

}
const rounded5 = {
    borderRadius: "0.7rem",
}
const Test = () => {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col lg={9}>
                    <div class="mb-4">
                        <h2 class="m-0"><i class="bi bi-hourglass-top me-2"></i>Today's top highlights</h2>
                        <p>Latest breaking news, pictures, videos, and special reports</p>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col className="mt-5">
                                <Card className="border-light col-sm-12">
                                    <Card.Img variant="top" src={randomImg.image} style={rounded5} />
                                    <Card.Body>
                                        <Card.Title>12 worst types of business accounts you follow on Twitter</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* Learn more last section */}
                    <Row>
                        <Col className="col-12 text-center mt-5">
                            <Button variant="danger" className="text-secondary">Learn more</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Row>
        </Container>

    )
}

export default Test


