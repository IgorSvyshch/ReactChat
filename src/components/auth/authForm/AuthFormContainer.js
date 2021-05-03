import AuthForm from './AuthForm';
import {auth, addName, addEmail, addPhone, validName, validEmail, inValidName, inValidEmail} from '../../../redux/authReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        nameValid: state.authPage.nameValid,
        emailValid: state.authPage.emailValid,
        newName: state.authPage.newName,
        newEmail: state.authPage.newEmail,
        newPhone: state.authPage.newPhone,
    }
}


const AuthFormContainer = connect(mapStateToProps,{auth, addName, addEmail, addPhone, validName, validEmail, inValidName, inValidEmail})(AuthForm);

export default AuthFormContainer;