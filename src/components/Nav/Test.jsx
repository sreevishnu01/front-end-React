import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = () => {
    return (
        <Container>
            <Row xs={2} md={2} className="g-4">
                <Col className="h-100">
                    <Button>this is one</Button>
                    <Button>this is one</Button>
                </Col>
                <Col>
                    <Button>this is two</Button>
                    <Button>this is two</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default Test
