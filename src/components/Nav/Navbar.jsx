import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="border-bottom py-3">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#link">Tutorial</Nav.Link>
                        <Nav.Link href="#link">Make Money</Nav.Link>
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Lifestyle</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
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


{/* <div className="app">
<Navbar collapseOnSelect class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center justify-content-md-between d-flex flex-wrap align-items-center py-3 mb-4 border-bottom">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav class="col-md-3 text-end">
                <Button className="me-2">Login</Button>
                <Button>Sign up</Button>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</div > */}