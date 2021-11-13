import axios from '../../../assets/axiosconfig'
import { useState } from 'react'
import { Form, Button, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function SidebarCategories() {

    const user = useSelector(state => state.user.token)
    const [addCategorie, setAddCategorie] = useState("")
    const [label, setLabel] = useState("")


    // axios post categories
    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(addCategorie)
        try {
            const res = await axios.put('users/' + user.id, {
                categories: addCategorie,
            }, {
                headers: { Authorization: `Bearer ${user.token}` }
            })
            console.log(res)
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
        }
    }



    const handelCheckbox = (e) => {
        const { name, checked } = e.target;
        let tempuser = label.map((user) =>
            user === name ? { user, isChecked: checked } : user
        );
        setLabel(tempuser)
    }


    return (
        <>
            <Card className="card-shadow">
                <Card.Header>Categories</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Select>
                                {user.categories.map((p) => (
                                    <option value={p}>{p}</option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                    </Form>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <InputGroup>
                            <FormControl placeholder="New Categories" onChange={e => setAddCategorie(e.target.value)} />
                            <Button onClick={handelSubmit}>+</Button>
                        </InputGroup>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </>
    )
}

export default SidebarCategories
