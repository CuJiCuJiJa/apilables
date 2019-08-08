import React from 'react';
import './VerticalNav.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


class VerticalNav extends React.Component {

    render() {
        return (
            <div className="VerticalNav-container" >
                
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )    
    }
}

export default VerticalNav;