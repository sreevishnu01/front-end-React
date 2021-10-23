import React from 'react'
import { Card } from 'react-bootstrap'

function Comments({ comments }) {
    return (
        <div>
            {Object.keys(comments).map((keyName) => (
                <Card className="mb-2">
                    <Card.Header>{comments[keyName].author}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                {new Date(comments[keyName].updatedAt).toDateString()}
                            </footer>
                            <Card.Text>{comments[keyName].comment}</Card.Text>
                        </blockquote>
                    </Card.Body>
                </Card>
            ))}
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