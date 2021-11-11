import React from 'react'
import { Form, Button, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap'

function SidebarCategories() {
    return (
        <>
            <Card>
                <Card.Header>Categories</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            <Form.Check type="checkbox" label="Check me out" />
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <InputGroup>
                            <FormControl placeholder="New Categories" />
                            <Button>+</Button>
                        </InputGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </>
    )
}

export default SidebarCategories
