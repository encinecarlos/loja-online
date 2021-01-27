import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
// import ajax from "../../instance";
import axios from "axios";

const Produtos = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantiodade] = useState(0);

  const saveData = () => {
    const produto = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      preco: preco,
      quantidade: quantidade,
    };

    axios
      .post("http://localhost:8000/produtos", produto)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cadeira Gamer X99"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cadeira Gamer X99"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cadeira Gamer X99"
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cadeira Gamer X99"
                onChange={(e) => setPreco(e.target.value)}
                value={preco}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Quantiodade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cadeira Gamer X99"
                onChange={(e) => setQuantiodade(e.target.value)}
                value={quantidade}
              />
            </Form.Group>
            <Button variant="primary" onClick={saveData} type="button">
              Cadastrar produto
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Produtos;
