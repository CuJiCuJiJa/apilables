import React from 'react';
import { Container, Row } from 'reactstrap';
import ApilableInfinito from '../components/ApilableInfinito/ApilableInfinito';
import ProjectPreview from '../components/ProjectPreview/ProjectPreview';
import SignInAd from '../components/SignInAd/SignInAd';

const Home = props => {
  return (
    <Container>
        <Row>
          <ApilableInfinito />
        </Row>
        <Row>
          <ProjectPreview />
        </Row>
        <Row>
            
        </Row>
        <Row>
          <SignInAd />
        </Row>

    </Container>
  );
};

export default Home;