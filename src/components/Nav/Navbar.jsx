import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="border-bottom py-3">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav onSelect className="mx-auto">
                        <Nav.Link href="/Tutorial">Tutorial</Nav.Link>
                        <Nav.Link href="#link">Make Money</Nav.Link>
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Lifestyle</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link >
                    </Nav>
                    <div class="col-md-3 text-end">
                        <Button variant='outline-primary' className="me-2">Login</Button>
                        <Button>Sign up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navbar1


