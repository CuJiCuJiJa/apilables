import React from 'react';
import { Row, Container} from 'reactstrap';
import './UserInfo.scss';

class UserInfo extends React.Component {

    render() {
        return (
            <div className="user-info">
              <div className="shadow-user-info ">
                <Container>
                <div className="row">
              <div className="col-6">
                <div className="avoid-menu user-info-box">
                    <h2 className="user-name"> Guillermo Perez Raventos </h2>
                    <div className="user-info-box">
                      <p> 84 valoraciones de perfil de la comunidad</p>
                      <p> 104 valoraciones de post de la comunidad</p>
                      <p> 108 valoraciones de perfiles en la comunidad</p>
                      <p> nodo performance</p>
                      <p> nodo fotografia</p>
                      <p> 3 incorporaciones a colecciones</p>
                    </div>

                </div>
              </div>
              <div className="col-6 perfil-container">
                  <div class="img-perfil">
                    <img src={process.env.PUBLIC_URL + '/perfil.jpg'}  alt="" title="Apilable al infinito" />
                  </div>
                </div>
                </div>
                </Container>
                  
              </div>
              </div>
        )    
    }
}

export default UserInfo; 