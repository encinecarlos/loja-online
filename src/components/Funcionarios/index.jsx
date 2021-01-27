import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, Button} from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:3000/funcionarios";

const Funcionarios = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");


    const saveFuncionario = async () =>{
        const payload = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        debugger

        let response = await axios.post(baseUrl, payload);
        
    }

    return (
        <div>
            <h1>Cadastro de funcionarios</h1>
            <Form className="FormFunc">
                <Form.Group as={Row} controlId="nome" className="col-md-6 ml-auto mr-auto mb-4">
                    <Form.Label className="col-md-2 text-left">Nome</Form.Label>
                    <Col md="10">
                        <Form.Control value={nome} onChange={(event) => setNome(event.target.value)} type="text" placeholder="Digite o seu nome"></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email" className="col-md-6 ml-auto mr-auto mb-4">
                    <Form.Label className="col-md-2 text-left">Email</Form.Label>
                    <Col md="10">
                        <Form.Control value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Digite o seu e-mail"></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="telefone" className="col-md-6 ml-auto mr-auto mb-4">
                    <Form.Label className="col-md-2 text-left">Telefone</Form.Label>
                    <Col md="10">
                        <Form.Control value={telefone} onChange={(event) => setTelefone(event.target.value)} type="text" placeholder="Digite o seu telefone"></Form.Control>
                    </Col>
                </Form.Group>
                <Button onClick={saveFuncionario}>Enviar</Button>
            </Form>
        </div>
    );
}

export default Funcionarios;
