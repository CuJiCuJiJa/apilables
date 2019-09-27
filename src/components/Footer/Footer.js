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
                            <NavLink href="instagram.com">
                                <img src={process.env.PUBLIC_URL + '/instagram.svg'} /> 
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink href="mailto:info@apilablealinfinito.com"> info@apilablealinfinito.com - copyright 2019 </NavLink>
                        </NavItem>
                    </Nav> 
                </div>
            </div>
        )    
    }
}

export default Footer;