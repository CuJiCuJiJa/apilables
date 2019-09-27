import React from 'react';
import './ProyectPreview.scss';
import { Col, Jumbotron, Button } from 'reactstrap';


class ProjectPreview extends React.Component {

    render() {
        return (

            <Col className="orange background-img" >
                <div className="container home-proyecto" >
                    <img class="m-top3" src={process.env.PUBLIC_URL + '/logoproyecto.svg'}/>
                    <p class="m-top3" > 
                        “Apilable al infinito” (se apila, se archiva, se comparte).
                        Apilable como archivo: registro ordenado de obra, documentación de obra y autor.
                        Apilable como archivo que construye legibilidades posibles.
                        Reescrituras. 
                    </p>
                    <Button className="btn btn-info m-top3">Conocer más</Button>
                </div>
            </Col>

       )        
    }
}

export default ProjectPreview;