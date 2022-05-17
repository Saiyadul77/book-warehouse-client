import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={30} src={logo} alt="" />Book Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="home#inventory">Inventory</Nav.Link>
                        <Nav.Link href="home#about">About</Nav.Link>
                        <Nav.Link href="home#contact">Contact</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user && <>
                            <Nav.Link as={Link} to="/inventories">Manage Item</Nav.Link>
                            <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link eventKey={2} as={Link} to="login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;