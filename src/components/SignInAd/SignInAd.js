import React from 'react';
import './SignInAd.css';

class SignInAd extends React.Component {

    render() {
        return (
            <div className="lightgrey-component col-12">
                <div>
                    <h3>Regístrate y conocé más sobre nosotros</h3>
                    <a  class="btn">Registrate</a> ó <button class="btn">Iniciá sesión</button>
                </div>
            </div>
        )    
    }
}

export default SignInAd;