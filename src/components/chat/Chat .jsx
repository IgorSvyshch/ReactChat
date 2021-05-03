import React from 'react';
import './chat.css';
import MessagesListContainer from './messagesList/MessageListContainer';
import SendMessageContainer from './SendMessage/SendMessageContainer';



const Chat = () => {
    return(
        <div className='chat-wrapper'>
            <MessagesListContainer/>
            <SendMessageContainer/>
        </div>
    )
}

export default Chat;