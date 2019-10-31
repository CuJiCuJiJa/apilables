import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'reactstrap';
import {Container, Row, Col, Label, Input } from 'reactstrap';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="back-img col-12" >
      <Container className="center-vertically-siform">
        <h1 className="title">Acceder</h1>
        <Form className="form">
            <FormGroup className="row">
              <Col xs="4">
                <Label >Email</Label>
              </Col>
              <Col xs="8">
                <Input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="correo electronico"
                />
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Col xs="4">
                <Label for="examplePassword">Contraseña</Label>
              </Col>
              <Col xs="8">
                <Input
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="contraseña"
              />
              </Col>
            </FormGroup>
          <Button className="orange">Inicia sesion</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;
