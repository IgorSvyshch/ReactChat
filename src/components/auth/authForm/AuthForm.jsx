import React from 'react';
import './AuthForm.css';


const AuthForm = (props) => {

    let validateName = (name) => {
        return name.length>2;
    }
    let validateEmail = (email) => {
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null ? false : true;
    }

        const newUserName = React.createRef();
        const newUserEmail = React.createRef();
        const newUserPhone = React.createRef();
    

        const auth = () => {
            if(props.nameValid) {
                if (props.emailValid) {
                    props.auth();
                } 
            }
        }
        

        const onFormChange = () => {
            let name = newUserName.current.value;

            if (validateName(name) === true) {
                props.validName() 
            } else {
                props.inValidName() 
            }

            let phone = newUserPhone.current.value;

            props.addName(name);
            props.addPhone(phone);
        }

        const onEmailChange = () => {
            let email = newUserEmail.current.value;

            if (validateEmail(email) === true) {
                props.validEmail() 
            } else {
                props.inValidEmail() 
            }

            props.addEmail(email);
        }


        console.log(props.nameValid)
        console.log(props.emailValid)
        
        return(
            <div className = 'auth-form'>
                <div className="group-input"> 
                    {props.nameValid === null ? '' : props.nameValid ? '' : <label for='name' className='invalid-data'>Invalid name</label>}
                    <input onChange={onFormChange} ref={newUserName} value={props.newName} name='name' className = {props.nameValid === null ? 'auth-form-input' : props.nameValid ? 'auth-form-input' : `auth-form-input invalid`} type="text" placeholder="Your name" />
                </div>
                <div className="group-input">
                    {props.emailValid === null ? '' : props.emailValid ? '' : <label for='email' className='invalid-data'>Invalid email</label>}
                    <input onChange={onEmailChange} ref={newUserEmail} value={props.newEmail} name='email' className = {props.emailValid === null ? 'auth-form-input' : props.emailValid ? 'auth-form-input' : `auth-form-input invalid`} type="email" placeholder="Your email" />
                </div>
                    <input  onChange={onFormChange} ref={newUserPhone} value={props.newPhone} className = 'auth-form-input' type="phone" placeholder="Your phone" />
                    <button onClick={auth} className = 'auth-form-btn'>Submit</button>
            </div>
        )
}


export default AuthForm;