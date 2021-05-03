import React from 'react';
import './Auth.css';
import close from '.././assets/close.svg'
import AuthFormHeader from './authFormHeader/AuthFormHeader';
import AuthFormContainer from './authForm/AuthFormContainer';
import Chat from './../chat/Chat ';


const Auth = (props) => {
    return(
        <div className="wrapper">
            <img onClick={props.closeChat} src={close} alt="Close"/>
              {props.isAuth 
              ? <Chat/> 
              : <div>
                    <AuthFormHeader/> 
                    <AuthFormContainer/> 
                </div>}
        </div>
        
    )
}

export default Auth;