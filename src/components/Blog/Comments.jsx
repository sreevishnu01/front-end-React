import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Card, Form, Button } from 'react-bootstrap'
import { Context } from '../../Context/Context'

function Comments({ postcomments, path }) {

    const [rating, setRateing] = useState();
    const [comment, setComment] = useState();
    const { user } = useContext(Context)
    const [error, setError] = useState(false)



    const handelComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/comments', {
                rating: rating,
                comment: comment,
                postid: path
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            


        } catch (err) {
            setError(true);
        }
    }

    return (
        <div>
            {Object.keys(postcomments).map((keyName) => (
                <Card className="mb-2">
                    <Card.Header>{postcomments[keyName].author.username}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                {new Date(postcomments[keyName].updatedAt).toDateString()}
                            </footer>
                            <Card.Text>{postcomments[keyName].comment}</Card.Text>
                        </blockquote>
                    </Card.Body>
                </Card>
            ))}
            <Form onSubmit={handelComment}>
                <Form.Group className="mt-5 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={e => setRateing(e.target.value)}>
                        <option>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select >
                    <Form.Control as="textarea" rows={3} onChange={e => setComment(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    )
}

export default Comments




{/* <div>

<div>


    {Object.keys(comments).map((keyName) => (
        <div>
            <p >{comments[keyName].author}</p>
            <p >{comments[keyName].rating}</p>
            <p >{comments[keyName].comment}</p>



        </div>
    ))}
</div>

</div> */}