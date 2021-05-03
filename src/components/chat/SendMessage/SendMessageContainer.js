import SendMessage from './SendMessage';
import {connect} from 'react-redux';
import { addMessage, updateMessage } from '../../../redux/messageReducer';



let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.newMessageText,
    }
}

const SendMessageContainer = connect(mapStateToProps, {addMessage, updateMessage})(SendMessage);

export default SendMessageContainer;