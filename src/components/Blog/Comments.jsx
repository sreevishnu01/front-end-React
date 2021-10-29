import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

function Comments({ postcomments, path }) {

    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const token = useSelector(state => state.user.token)

    const handelComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/comments', {
                rating, comment, postid: path
            }, {
                headers: { Authorization: `Bearer ${token.token}` }
            });
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Comments</Card.Title>
                </Card.Body>


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
            </Card>
            <Card>

                <Form className="mt-5">
                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect" onChange={e => setRating(e.target.value)}>
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} onChange={e => setComment(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onclick={handelComment} >
                        post
                    </Button>
                </Form>
            </Card>




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