import React from 'react';
import { Col } from 'reactstrap';
import './ApilableInfinito.scss';
import './byn.jpg'; // Tell Webpack this JS file uses this image



class ApilableInfinito extends React.Component {
    render() {
        return (
            <Col className="back-img-home" >
                <img src={process.env.PUBLIC_URL + '/apilablelogo.svg'}  alt="logo"/>
            </Col>
        )    
    }
}

export default ApilableInfinito;