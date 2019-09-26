import React from 'react';
import './SignInAd.css';

class SignInAd extends React.Component {

    render() {
        return (
            <div className="lightgrey-component col-12">
                <div>
                    <h3>Regístrate y conocé más sobre nosotros</h3>
                    <button class="btn">Registrate</button> ó <button class="btn">Iniciá sesión</button>
                </div>
            </div>
        )    
    }
}

export default SignInAd;