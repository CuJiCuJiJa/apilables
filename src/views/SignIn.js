import React from 'react';
import { Container, Row } from 'reactstrap';
import Login from '../components/Login/Login';


const SingIn = props => {
  return (
    <div className="full-heigth">
        <Row>
          <Login/>
        </Row>

    </div>
  );
};

export default SingIn;