import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import frameimg from '../../assets/9159.jpeg'
import frameimg1 from '../../assets/2188603.png'

const randomImg = {
    image: 'https://picsum.photos/1000/750',
    images: 'https://picsum.photos/200',

}
const rounded5 = {
    borderRadius: "0.7rem",
}


const Test = () => {
    return (

        <Container>
            <Card style={{
                background: `url(${frameimg})`
            }} className="card-grid-lg card-overlay-bottom card-bg-scale card-bg-img m-5">
                <Card.ImgOverlay className="d-flex align-items-center p-3 p-sm-4 text-white">
                    <div class="w-100 mt-auto">
                        <Card.Title >
                            <Card.Link href="#sudo" className="btn-link text-reset stretched-link">Ten tell-tale signs you need to get a new startup.
                            </Card.Link>
                        </Card.Title>
                        <Card.Body>This is some text within a card body.This is some text within a card body. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum dolores ut magnam atque eveniet odit non veritatis, sunt dignissimos commodi mollitia? Modi!</Card.Body>
                    </div>
                </Card.ImgOverlay>

            </Card>
            <Container className="mt-5 pb-3">
                <Row className="g-4">
                    <Col lg={6} >
                        <Card style={{
                            background: `url(${frameimg})`
                        }} className="card-overlay-bottom card-bg-scale card-bg-img img-fluid text-white h-100" >

                            <Card.ImgOverlay className="d-flex align-items-center p-3 p-sm-4">
                                <div class="w-100 mt-auto">
                                    <Card.Title >
                                        <Card.Link href="#sudo" className="btn-link text-reset stretched-link">Ten tell-tale signs you need to get a new startup.
                                        </Card.Link>
                                    </Card.Title>
                                    <Card.Body>This is some text within a card body.This is some text within a card body. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum dolores ut magnam atque eveniet odit non veritatis, sunt dignissimos commodi mollitia? Modi!</Card.Body>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    {/* second coll */}
                    <Col>
                        <Row className="g-4">
                            <Col lg={12} className="card-grid-sm">
                                <Card style={{
                                    background: `url(${frameimg})`
                                }} className="card-overlay-bottom card-bg-scale card-bg-img text-white h-100" >

                                    <Card.ImgOverlay className="card-img-overlay d-flex align-items-center p-3 p-sm-4" >
                                        <div class="w-100 mt-auto">
                                            <Card.Title>
                                                <Card.Link href="#sudo" className="btn-link text-reset stretched-link">Ten tell-tale signs you need to get a new startup.
                                                </Card.Link>
                                            </Card.Title>
                                            <Card.Body>This is some text within a card body.</Card.Body>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col lg={6} className="col-md-6 mt-3">
                                <Card style={{
                                    background: `url(${frameimg1})`, height: '18rem', borderRadius: "0.7rem"
                                }} className="text-white card-overlay-bottom card-bg-scale card-bg-img">

                                    <Card.ImgOverlay className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                                        <div class="w-100 mt-auto">
                                            <Card.Title>
                                                <Card.Link href="#sudo" className="btn-link text-reset stretched-link">
                                                    Five intermediate guide to business
                                                </Card.Link>
                                            </Card.Title>
                                            <Card.Body>This is some text within a card body.</Card.Body>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col lg={6} className="col-md-6 mt-3">
                                <Card style={{ background: `url(${frameimg1})`, height: '18rem', borderRadius: "0.7rem" }} className="text-white card-overlay-bottom card-bg-scale card-bg-img">

                                    <Card.ImgOverlay className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                                        <div class="w-100 mt-auto">
                                            <Card.Title>
                                                <Card.Link href="#sudo" className="btn-link text-reset stretched-link">Ten tell-tale signs you need to get a new startup.
                                                </Card.Link>
                                            </Card.Title>
                                            <Card.Body>This is some text within a card body.</Card.Body>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>

                    </Col>

                </Row >

            </Container >
        </Container>

    )
}

export default Test


