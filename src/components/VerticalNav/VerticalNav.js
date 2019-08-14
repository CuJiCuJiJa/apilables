import React from 'react';
import './VerticalNav.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


class VerticalNav extends React.Component {

    render() {
        return (
            <div className="VerticalNav row" >
                
                <Nav vertical>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/archivo">Archivo</NavLink>
                    </NavItem>  
                </Nav>
            </div>
        )    
    }
}

export default VerticalNav;