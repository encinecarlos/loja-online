import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>GameStore</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/produtos">Produtos</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
