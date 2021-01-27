import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>GameStore</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/funcionarios">Funcionários</Link>
    </Nav>
  </Navbar>
);

export default Header;
