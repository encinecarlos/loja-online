import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Base from "../Base";

const Produtos = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Cadeira Gamer X99" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" placeholder="Cadeira Gamer X99" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" placeholder="Cadeira Gamer X99" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control type="text" placeholder="Cadeira Gamer X99" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Quantiodade</Form.Label>
              <Form.Control type="text" placeholder="Cadeira Gamer X99" />
            </Form.Group>
            <Button variant="primary" type="button">
              Cadastrar produto
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Produtos;
