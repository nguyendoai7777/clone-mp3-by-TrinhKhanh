import React from 'react';
import img from './../../Assets/images/loginBanner.PNG';
function LoginBanner(props) {
    return (
        <section id="login-banner">
            <a href="/login">
                <div className="container">
                    <img src={img} alt=""/>
                </div>
            </a>
        </section>
    );
}

export default LoginBanner;