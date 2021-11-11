import { Container, Row, Col, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Layout/Sidebar/Sidebar";
import Test from "../Layout/Nav/Test";
import axios from '../../assets/axiosconfig';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { blogPostAll } from "../../redux/blog";
import frameimg from '../../assets/707653.jpeg'


const rounded5 = {
    borderRadius: "0.7rem",
}

// card  

function Blogposts() {
    const [posts, setposts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post")
            dispatch(blogPostAll(res.data));
            setposts(res.data)
        }
        fetchPosts()

    }, [dispatch])

    return (
        <Container className="pt-5 pb-5 mb-5">
            <Row className="mb-5">
                <Col lg={9}>
                    <div className="mb-4">
                        <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>Today's top highlights</h2>
                        <p>Latest breaking news, pictures, videos, and special reports</p>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                        {/* limited number of loop iterms */}
                        {posts.slice(0, 4).map((p) => (
                            <Col className="mt-5" key={p._id}>
                                <Card className="border-light col-sm-12">
                                    <Card.Img variant="top" src={frameimg} style={rounded5} />
                                    <Card.Body>
                                        <Card.Title >
                                            <Card.Link href={`/blog/${p._id}`} className="btn-link text-reset stretched-link" >{p.title}</Card.Link>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{p.author.firstname} {p.author.lastname}</Card.Subtitle>
                                        <Card.Text>
                                            {p.description.length > 250 ? `${p.description.substring(0, 250)}...` : p.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* Learn more last section */}
                    <Row>
                        <Col className="col-12 text-center mt-5">
                            <Button href="/blog" variant="primery" className="text-secondary">
                                Learn more</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Sidebar />
                </Col>
            </Row>
            <Test />
        </Container>
    )
}

export default Blogposts
