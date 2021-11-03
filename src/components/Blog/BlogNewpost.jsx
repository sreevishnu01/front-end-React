import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function BlogNewpost() {

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
        <div>
            <Container>
                <Form onSubmit={handelSubmit}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>title</Form.Label>
                        <Form.Control type="title" placeholder="title" onChange={e => setTitle(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicLabel">
                        <Form.Label>label</Form.Label>
                        <Form.Control type="label" placeholder="label" onChange={e => setLabel(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicDiscription">
                        <Form.Label>discription</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={e => setDisc(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default BlogNewpost
