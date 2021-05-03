import App from './App';
import {openChat, closeChat} from './redux/appReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isChatOpen: state.appPage.isChatOpen,
    }
}
const AppContainer = connect(mapStateToProps, {openChat, closeChat})(App);

export default AppContainer;