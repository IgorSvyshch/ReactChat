import React from 'react';
import './AuthFormHeader.css';

const AuthFormHeader = () => {

    return(
        <div className = 'auth-form-header'>
            <div className = 'chat-image'>
                <img src="https://legalppe.com/templates/ws/images/testi-image-2.jpg" alt="manager"/>
            </div>
            <span>Hello! How can I help?</span>
        </div>
    )
}

export default AuthFormHeader;