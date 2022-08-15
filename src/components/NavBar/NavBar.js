import './NavBar.css'
import { Navbar,Container,NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import {FaShoppingCart} from "react-icons/fa";


function NavBar({size}){
    return(

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="/" >YUMme!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="navbar-title">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown  title="Menu" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Delicious Meal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Drinks
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pastries</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                             Yoghurts
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                               Grills
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Desserts
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link  href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>


                    </Nav>
                    </div>
                    <Nav>
                        <Nav.Link href="#deets">Order Track</Nav.Link>
                        <Nav.Link eventKey={2} href="/cart"><FaShoppingCart color="#E88F4E" fontSize="25px"/>
                            <span id='cartLength'>{}</span>
                          Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar


