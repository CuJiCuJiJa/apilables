import React from 'react';
import './VerticalNav.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';


class VerticalNav extends React.Component {

    render() {
        return (
            <div className="VerticalNav row" >
                
                <Nav vertical>

                    <NavItem>
                        <NavLink className="vertical-nav-item" href="/home">
                                <img src={process.env.PUBLIC_URL + '/casa.svg'}  alt="" title="Apilable al infinito" />
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="vertical-nav-item" href="/archivo">
                          <img src={process.env.PUBLIC_URL + '/carpeta.svg'}  alt="" title="Apilable al infinito" />
                        </NavLink>
                    </NavItem>  

                    <NavItem>
                        <NavLink className="vertical-nav-item" href="/Profile">
                                <img src={process.env.PUBLIC_URL + '/perfil.svg'}  alt="" title="Apilable al infinito" />
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )    
    }
}

export default VerticalNav;