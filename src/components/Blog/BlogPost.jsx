import { Container, Row, Col, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Comments from '../Blog/Comments';
import Sidebar from "../Sidebar";




function Blogpost({ post }) {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [comment, setComment] = useState({})

    useEffect(() => {
        const getComment = async () => {
            const res = await axios("/comments/?postid=" + path);
            setComment(res.data);
        };
        getComment()
    }, [path]);


    return (
        <>
            <Container className="mb-5">
                <Row>
                    <Col lg={9}>

                        <Row>
                            <Col lg={12}>

                                <Card className="mb-5">
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} className="mt-5">
                                <Comments postcomments={comment} path={path} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Sidebar />
                    </Col>

                </Row>
            </Container>





        </>

    )
}


export default Blogpost
