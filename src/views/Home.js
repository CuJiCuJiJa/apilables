import React from 'react';
import { Container, Row } from 'reactstrap';
import ApilableInfinito from '../components/ApilableInfinito/ApilableInfinito';
import ProjectPreview from '../components/ProjectPreview/ProjectPreview';

const Home = props => {
  return (
    <div className="">
        <Row>
            <ApilableInfinito />
        </Row>
        <Row className="orange">
            <ProjectPreview  />
        </Row>
        <Row>

        </Row>
        <Row>

        </Row>

    </div>
  );
};

export default Home;