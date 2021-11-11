import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import axios from '../../../assets/axiosconfig'
import { useState } from 'react'
import { useSelector } from 'react-redux'





function Editor() {

    const user = useSelector(state => state.user.token)
    const [title, setTitle] = useState("")
    const [label, setLabel] = useState("")
    const [description, setDisc] = useState("")
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/post', {
                title: title,
                label: label,
                description: description,
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if (error.response.status === 401) {
                    localStorage.removeItem("token");
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                window.location = "/login";
            }

        };
        e.target.reset();
    }
    return (
        <Card>
            <Card.Body>
                <Container>

                    <Form onSubmit={handelSubmit}>
                        <Form.Group controlId="formBasicTitle ">
                            {/* <Form.Label>title</Form.Label> */}
                            <Form.Control type="title" placeholder="Your Post Title" onChange={e => setTitle(e.target.value)}></Form.Control>
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicLabel">
                                        <Form.Label>label</Form.Label>
                                        <Form.Control type="label" placeholder="label" onChange={e => setLabel(e.target.value)}></Form.Control>
                                    </Form.Group> */}
                        <Form.Group controlId="formBasicDiscription" className="mt-3">
                            {/* <Form.Label>discription</Form.Label> */}
                            <Form.Control as="textarea" rows={10} onChange={e => setDisc(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Publish
                        </Button>
                    </Form>

                </Container>
            </Card.Body>
        </Card>
    )
}

export default Editor
