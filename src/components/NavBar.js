import {Navbar, Nav} from 'react-bootstrap/';

const NavBar = props => <Navbar collapseOnSelect expand = "md" bg = "light" className ="text-dark p-0 pt-1"
    variant="light" >
    <Navbar.Brand href = "#home">  
        <img src = {'/img/dht-logo.png'} width = {140} alt = "dht-logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
    <Navbar.Collapse id = "responsive-navbar-nav">
    <Nav className="me-auto w-100 d-flex justify-content-end ">
        <Nav.Link href = "#updateInfo"disabled >CV</Nav.Link>
        <Nav.Link href = "/" ><b>Tests</b></Nav.Link>
        <Nav.Link href = "#jobStatus" disabled>Status</Nav.Link>
        <Nav.Link href = "#contact" disabled>Contact us</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>;

export default NavBar;