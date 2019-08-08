import React from 'react';
import './Footer.css';
import { Nav, NavLink, NavItem } from 'reactstrap';


class Footer extends React.Component {

    render() {
        return (
            <div className="Footer-container">
                <Nav>
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

export default Footer;