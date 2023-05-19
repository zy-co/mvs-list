import {Navbar, Container, Nav} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Nav>
         <Nav.Link href="#upcom">Upcoming</Nav.Link>
         <Nav.Link href="#watched">Watched</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
};

export default NavigationBar