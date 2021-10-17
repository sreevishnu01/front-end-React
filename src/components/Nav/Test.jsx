import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = () => {
    return (
        <Container className="mt-5">
            <Row xs={2} md={2} className="g-4">
                <Col className="h-100">
                    <Card style={{ height: '100px', border: '1px solid black', borderRadius: '17px' }}></Card>
                </Col>
                <Col>
                    <Button>this is two</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default Test
