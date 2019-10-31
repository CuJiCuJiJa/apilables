import React from 'react';
import './SignInAd.scss';

class SignInAd extends React.Component {

    render() {
        return (
            <div className="lightgrey-component col-12">
                <div className="container login-or-register" >
                    <h3>Regístrate y conocé más sobre nosotros</h3>
                    <a  class="btn">Registrate</a> ó <a href="/Login" class="btn">Iniciá sesión</a>
                </div>
            </div>
        )    
    }
}

export default SignInAd; 