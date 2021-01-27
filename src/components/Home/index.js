import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container } from "react-bootstrap";
import Base from "../Base";

const Home = () => {
  const [produtos, setprodutos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/produtos")
      .then((produtos) => setprodutos(produtos))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Base>
      <Container>
        {/* {produtos.map((produto) => (
          <Col key={produto.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://fakeimg.pl/180"></Card.Img>
              <Card.body>
                <Card.Title>{produto.nome}</Card.Title>
              </Card.body>
            </Card>
          </Col>
        ))} */}
      </Container>
    </Base>
  );
};

export default Home;
