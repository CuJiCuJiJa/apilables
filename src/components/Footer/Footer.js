import React from 'react';
import './Footer.scss';
import { Nav, NavLink, NavItem } from 'reactstrap';



class Footer extends React.Component {

    render() {
        return (
            <div className="gris row">
                <div className="container">
                    <Nav>
                        <NavItem>
                            <NavLink href="fb.com">
                                <img src={process.env.PUBLIC_URL + '/facebook.svg'} /> 
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="instagram.com">

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#">Another Link</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink disabled href="#">Disabled Link</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        )    
    }
}

export default Footer;