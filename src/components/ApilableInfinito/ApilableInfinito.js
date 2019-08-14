import React from 'react';
import { Col } from 'reactstrap';
// import './ApilableInfinito.css';
// import { Nav, NavLink, NavItem } from 'reactstrap';


class ApilableInfinito extends React.Component {

    render() {
        return (
            <Col xs={{offset: 10}}>
                <img src={process.env.PUBLIC_URL + '/apilablelogo.svg'}  alt="logo"/>
            </Col>
        )    
    }
}

export default ApilableInfinito;