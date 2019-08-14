import React from 'react';
import { Col, Jumbotron, Button } from 'reactstrap';

class ProjectPreview extends React.Component {

    render() {
        return (
            <Col >
                <Jumbotron>
                    "IMAGEN"
                    <p>
                        “Apilable al infinito” (se apila, se archiva, se comparte).
                        Apilable como archivo: registro ordenado de obra, documentación de obra y autor.
                        Apilable como archivo que construye legibilidades posibles.
                        Reescrituras. 
                    </p>
                    <Button className="btn btn-info">Conocer Más</Button>
                </Jumbotron>
            </Col>
       )        
    }
}

export default ProjectPreview;