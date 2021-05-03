import Auth from './Auth';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        user: state.authPage.user,
        isAuth: state.authPage.isAuth,
    }
}

const AuthContainer = connect(mapStateToProps, {})(Auth);

export default AuthContainer;