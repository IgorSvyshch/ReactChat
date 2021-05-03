import MessageList from './MessagesList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        message: state.messagePage.message,
    }
}

const MessageListContainer = connect(mapStateToProps, {})(MessageList);

export default MessageListContainer;