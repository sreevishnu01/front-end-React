import axios from 'axios'
import { useContext, useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Context } from '../../Context/Context'

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFeching } = useContext(Context)

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post('/users/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });

        }

    };

    return (
        <div>
            <div className="min-vh-100  ">
                <Container className="" >
                    <div className="form-signin  align-items-center justify-content-center d-flex">
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={userRef} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Log me in" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login
