import React from 'react';
import './messagesList.css';
import Messages from './messages/Messages';



const MessagesList = (props) => {

        let message = props.message.map((m) => {
            return(
                <Messages message={m.message} userId={m.userId} key = {m.id} />
            )
        })

        return(
            <ul className='message-list'>
                {message}
            </ul>
        )
}


export default MessagesList;