import {
    Container, 
    Nav, 
    NavDropdown, 
    Navbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function MyNavbar() {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    React Routing
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Link to="/about" className="nav-link">About</Link>

                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Service Marketing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Service Digital
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Service RH
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Autre Services
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Link to="/contact" className="nav-link">Contact</Link>

                        <Link to="/profile/1" className="nav-link">Mon compte</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}