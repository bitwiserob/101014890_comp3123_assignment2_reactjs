import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarMain = () =>{
    return (
        <Navbar bg="dark"  variant={"dark"} expand="lg">
            <Container>
                <Navbar.Brand href="#home">Assignment02</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/view">Manage</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                        <Nav.Link href="/signout">Sign out</Nav.Link>
                        <Nav.Link href="/" className={"justify-content-end"}>Sign in</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain;